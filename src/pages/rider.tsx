import NextLink from 'next/link'
import { SeoHead } from '@/components/seo/SeoHead'
import { MyText } from '@/components/ui/MyText'
import { Button, Flex, Card, CardBody, Stack, Text, Divider } from '@chakra-ui/react'
import Image from 'next/image'

export default function Rider() {
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
            </Stack>
          </CardBody>
          <Divider />
          <Flex direction='column' justifyContent='center' alignItems='center' m={2} p={2}>
            <Button as={NextLink} href='/Tarło-rider.pdf' target='_blank' rel='noopener noreferrer' variant='solid'>
              Pobierz PDF
            </Button>
          </Flex>
        </Card>
      </Flex>
    </>
  )
}

