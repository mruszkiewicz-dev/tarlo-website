import { MyText } from '@/components/ui/my-text'
import { Flex, Text, Link } from '@chakra-ui/react'
import { Form } from '@/components/ui/form'
import { LinkIcon } from '@chakra-ui/icons'

import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <MyText>Kontakt</MyText>
      <Flex
        mt={{ base: 2, xl: 10 }}
        align='center'
        justifyContent='center'
        direction='column'
      >
        <Text>Telefon: 728 306 334</Text>
        <Text>
          Fb:
          <Link href='https://www.facebook.com/tarlorockband/' target='_blank'>
            <LinkIcon />
          </Link>
        </Text>
      </Flex>
      <Flex mt={2} align='center' justifyContent='center'>
        <Form />
      </Flex>
    </>
  )
}
