import { useFormik } from 'formik'
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Flex,
  VStack,
} from '@chakra-ui/react'

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex alignItems='center' justifyContent='center' direction='column'>
        <FormControl>
          <FormLabel textAlign='center' htmlFor='email'>
            Email
          </FormLabel>
          <Input
            id='email'
            name='email'
            type='email'
            variant='filled'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormControl>
        <Button type='submit'>Wyślij</Button>
      </Flex>
    </form>
  )
}
