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
        mt={{ base: 2, xl: 4 }}
        align='center'
        justifyContent='center'
        direction='column'
      >
        <Text p={2}>Telefon: 728 306 334</Text>
        <Text p={2}>
          Facebook:
          <Link href='https://www.facebook.com/tarlorockband/' target='_blank'>
            <LinkIcon />
          </Link>
        </Text>
      </Flex>
      <Flex align='center' justifyContent='center'>
        <Form />
      </Flex>
    </>
  )
}
