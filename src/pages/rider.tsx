import type { GetStaticProps } from 'next'
import { SeoHead } from '@/components/seo/SeoHead'
import { MyText } from '@/components/ui/MyText'
import { Button, Flex, Card, CardBody, Stack, Text, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import { getRiderPdfInfo } from '@/lib/rider'

type RiderProps = {
  hasRiderFile: boolean
  riderUpdatedAt: string | null
  riderSource: 'configured' | 'public' | 'drive' | 'none'
}

export const getStaticProps: GetStaticProps<RiderProps> = async () => {
  const rider = await getRiderPdfInfo()

  return {
    props: {
      hasRiderFile: Boolean(rider.absolutePath || rider.driveFileId),
      riderUpdatedAt: rider.updatedAt,
      riderSource: rider.source,
    },
    revalidate: 60 * 5,
  }
}

export default function Rider({ hasRiderFile, riderUpdatedAt, riderSource }: RiderProps) {
  const updatedAtLabel = riderUpdatedAt
    ? new Intl.DateTimeFormat('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(riderUpdatedAt))
    : null
  let sourceLabel = 'brak pliku'
  if (riderSource === 'drive') {
    sourceLabel = 'folder Google Drive (auto)'
  } else if (riderSource === 'configured') {
    sourceLabel = 'katalog/plik z RIDER_PDF_PATH'
  } else if (riderSource === 'public') {
    sourceLabel = 'public/'
  }

  return (
    <>
      <SeoHead
        title='Tarlo - Rider techniczny'
        description='Sprawdz rider techniczny zespolu Tarlo i pobierz dokument PDF.'
        path='/rider'
        keywords='Tarlo rider, rider techniczny, sprzet koncertowy'
      />
      <MyText>Rider</MyText>
      <Flex mt={{ base: 2, xl: 1 }} align='top' justifyContent='center'>
        <Card maxW='sm' m={{ base: '4', md: '0' }}>
          <CardBody>
            <Image
              src='/rack.jpg'
              alt='Rack zespolu Tarlo'
              width={640}
              height={420}
              sizes='(max-width: 768px) 100vw, 640px'
              style={{ borderRadius: '8px', width: '100%', height: 'auto' }}
            />
            <Stack mt='6' spacing='3'>
              <Text>
                Zespol dysponuje wlasnym rackiem dzwiekowym oraz kompletnym systemem odsluchowym. Prosba o
                uwzglednienie tego podczas przygotowan technicznych.
              </Text>
              <Text fontSize='sm' color='gray.500'>
                Zrodlo pliku: {sourceLabel}
              </Text>
              {updatedAtLabel ? (
                <Text fontSize='sm' color='gray.500'>
                  Ostatnia aktualizacja pliku: {updatedAtLabel}
                </Text>
              ) : null}
            </Stack>
          </CardBody>
          <Divider />
          <Flex direction='column' justifyContent='center' alignItems='center' m={2} p={2}>
            <Button
              as='a'
              href='/api/rider-pdf'
              target='_blank'
              rel='noopener noreferrer'
              variant='solid'
              isDisabled={!hasRiderFile}
            >
              {hasRiderFile ? 'Pobierz PDF' : 'Brak pliku PDF'}
            </Button>
          </Flex>
        </Card>
      </Flex>
    </>
  )
}
