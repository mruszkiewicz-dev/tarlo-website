import type { GetStaticProps } from 'next'
import { SeoHead } from '@/components/seo/SeoHead'
import { MyText } from '@/components/ui/MyText'
import {
  Box,
  Card,
  CardBody,
  Link,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { Concert, getConcertsData } from '@/lib/concerts'

type ConcertsProps = {
  concerts: Concert[]
}

function getGoogleMapsSearchLink(place: string) {
  const cleaned = place.trim()
  if (!cleaned) {
    return null
  }

  if (cleaned.toLowerCase().includes('potwierdzenia')) {
    return null
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cleaned)}`
}

export const getStaticProps: GetStaticProps<ConcertsProps> = async () => {
  const concerts = await getConcertsData()

  return {
    props: { concerts },
    revalidate: 60 * 15,
  }
}

export default function Concerts({ concerts }: ConcertsProps) {
  const hasConcerts = concerts.some((item) => item.place && item.date)

  const schema = hasConcerts
    ? concerts
        .filter((item) => item.place && item.date)
        .map((item) => ({
          '@context': 'https://schema.org',
          '@type': 'MusicEvent',
          name: item.name || `Koncert Tarlo - ${item.place}`,
          startDate: item.dateISO || item.date,
          location: {
            '@type': 'Place',
            name: item.place,
          },
          performer: {
            '@type': 'MusicGroup',
            name: 'Tarlo',
          },
          url: item.link || 'https://www.tarlo.pl/concerts',
        }))
    : undefined

  return (
    <>
      <SeoHead
        title='Tarlo - Koncerty'
        description='Sprawdz najblizsze koncerty zespolu Tarlo i zobacz gdzie gramy na zywo.'
        path='/concerts'
        keywords='Tarlo koncerty, koncerty rock, trasa koncertowa'
        schema={schema}
      />
      <MyText>Koncerty</MyText>
      <Box mt={{ base: 2, xl: 10 }} px={4}>
        {hasConcerts ? (
          <>
            <Box display={{ base: 'block', md: 'none' }} maxW='container.sm' mx='auto'>
              <Stack spacing={4}>
                {concerts.map((item, index) => {
                  const mapsLink = getGoogleMapsSearchLink(item.place)

                  return (
                    <Card key={`${item.place}-${index}`} variant='outline' borderColor='whiteAlpha.300'>
                      <CardBody>
                        <Stack spacing={2}>
                          <Text fontSize='lg' fontWeight='bold' wordBreak='break-word' overflowWrap='anywhere'>
                            {item.name}
                          </Text>

                          <Box>
                            <Text fontSize='xs' color='gray.400' textTransform='uppercase'>
                              Miejsce
                            </Text>
                            <Text fontWeight='medium' wordBreak='break-word' overflowWrap='anywhere'>
                              {item.place}
                            </Text>
                            {mapsLink ? (
                              <Link href={mapsLink} isExternal color='teal.400' fontSize='sm'>
                                Otworz w Google Maps
                              </Link>
                            ) : null}
                          </Box>

                          <Box>
                            <Text fontSize='xs' color='gray.400' textTransform='uppercase'>
                              Data
                            </Text>
                            <Text>{item.date}</Text>
                          </Box>

                          {item.link ? (
                            <Link href={item.link} isExternal color='red.400' fontWeight='semibold'>
                              Szczegoly
                            </Link>
                          ) : (
                            <Text color='gray.500'>Szczegoly wkrotce</Text>
                          )}
                        </Stack>
                      </CardBody>
                    </Card>
                  )
                })}
              </Stack>
            </Box>

            <TableContainer maxW='container.lg' mx='auto' display={{ base: 'none', md: 'block' }}>
              <Table variant='simple' size='lg'>
                <Thead>
                  <Tr>
                    <Th>Wydarzenie</Th>
                    <Th>Miejsce</Th>
                    <Th>Data</Th>
                    <Th>Link</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {concerts.map((item, index) => {
                    const mapsLink = getGoogleMapsSearchLink(item.place)

                    return (
                      <Tr key={`${item.place}-${index}`}>
                        <Td maxW='320px'>
                          <Text wordBreak='break-word' overflowWrap='anywhere'>
                            {item.name}
                          </Text>
                        </Td>
                        <Td maxW='340px' whiteSpace='normal'>
                          <Text fontWeight='medium' wordBreak='break-word' overflowWrap='anywhere'>
                            {item.place}
                          </Text>
                          {mapsLink ? (
                            <Link href={mapsLink} isExternal color='teal.400' fontSize='sm'>
                              Google Maps
                            </Link>
                          ) : null}
                        </Td>
                        <Td whiteSpace='nowrap'>{item.date}</Td>
                        <Td>
                          {item.link ? (
                            <Link href={item.link} isExternal color='red.400'>
                              Szczegoly
                            </Link>
                          ) : (
                            '-'
                          )}
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <Text textAlign='center'>Wkrotce podamy informacje o nowych koncertach.</Text>
        )}
      </Box>
    </>
  )
}

