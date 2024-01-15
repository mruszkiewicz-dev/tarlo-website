import { MyText } from '@/components/ui/my-text'
import { Flex } from '@chakra-ui/react'
import { Form } from '@/components/ui/form'
import ContactForm from '@/components/ui/ContactForm'

export default function Contact() {
  return (
    <>
      <MyText>Kontakt</MyText>
      <Flex mt={{ base: 2, xl: 10 }} align='center' justifyContent='center'>
        <Form />
      </Flex>
    </>
  )
}
