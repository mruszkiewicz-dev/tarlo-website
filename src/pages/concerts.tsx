import fs from 'fs'
import path from 'path'
import type { GetStaticProps } from 'next'
import { SeoHead } from '@/components/seo/SeoHead'
import { MyText } from '@/components/ui/MyText'
import { Box, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'

type Concert = {
  place: string
  name: string
  date: string
  link: string
}

type ConcertsProps = {
  concerts: Concert[]
}

export const getStaticProps: GetStaticProps<ConcertsProps> = async () => {
  const filePath = path.join(process.cwd(), 'public', 'concerts.json')
  const file = fs.readFileSync(filePath, 'utf-8')
  const concerts = JSON.parse(file) as Concert[]

  return {
    props: { concerts },
    revalidate: 60 * 60,
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
          startDate: item.date,
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
          <TableContainer maxW='container.lg' mx='auto'>
            <Table variant='simple' size='lg'>
              <Thead>
                <Tr>
                  <Th>Miejsce</Th>
                  <Th display={{ base: 'none', md: 'table-cell' }}>Wydarzenie</Th>
                  <Th>Data</Th>
                  <Th>Link</Th>
                </Tr>
              </Thead>
              <Tbody>
                {concerts.map((item, index) => (
                  <Tr key={`${item.place}-${index}`}>
                    <Td>{item.place}</Td>
                    <Td display={{ base: 'none', md: 'table-cell' }}>{item.name}</Td>
                    <Td>{item.date}</Td>
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
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        ) : (
          <Text textAlign='center'>Wkrotce podamy informacje o nowych koncertach.</Text>
        )}
      </Box>
    </>
  )
}

