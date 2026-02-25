import { MyText } from '@/components/ui/MyText'
import { Flex, Text, Link } from '@chakra-ui/react'
import { Form } from '@/components/ui/Form'
import { SeoHead } from '@/components/seo/SeoHead'

export default function Contact() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tarlo',
    url: 'https://www.tarlo.pl/contact',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+48-728-306-334',
        contactType: 'booking',
        areaServed: 'PL',
      },
    ],
  }

  return (
    <>
      <SeoHead
        title='Tarlo - Kontakt'
        description='Skontaktuj sie z zespolem Tarlo w sprawie koncertow i wspolpracy.'
        path='/contact'
        keywords='Tarlo kontakt, booking zespolu, koncerty'
        schema={schema}
      />
      <MyText>Kontakt</MyText>
      <Flex mt={{ base: 2, xl: 4 }} align='center' justifyContent='center' direction='column'>
        <Text p={2}>Telefon: 728 306 334</Text>
        <Text p={2}>
          Facebook:{' '}
          <Link href='https://www.facebook.com/tarlorockband/' target='_blank' rel='noopener noreferrer' color='red.400'>
            facebook.com/tarlorockband
          </Link>
        </Text>
      </Flex>
      <Flex align='center' justifyContent='center'>
        <Form />
      </Flex>
    </>
  )
}

