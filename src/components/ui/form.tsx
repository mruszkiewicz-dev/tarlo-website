import { useFormik } from 'formik'
import {
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },

    onSubmit: (values) => {
      fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ ...values }),
      })
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex
        alignItems='center'
        justifyContent='center'
        direction='column'
        w={{ base: '100', md: '500px' }}
      >
        <FormControl mt='2'>
          <FormLabel textAlign='center' htmlFor='email'>
            Email
          </FormLabel>
          <Input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            bg={useColorModeValue('gray.200', 'gray.700')}
          />
        </FormControl>
        <FormControl mt='2'>
          <FormLabel textAlign='center' htmlFor='message'>
            Wiadomość
          </FormLabel>
          <Textarea
            id='message'
            name='message'
            variant='textarea'
            onChange={formik.handleChange}
            value={formik.values.message}
            h={40}
            bg={useColorModeValue('gray.200', 'gray.700')}
          />
        </FormControl>
        <Button
          mt='2'
          type='submit'
          bg={useColorModeValue('gray.200', 'gray.700')}
        >
          Wyślij
        </Button>
      </Flex>
    </form>
  )
}
