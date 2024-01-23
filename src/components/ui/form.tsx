'use client'

import { useState } from 'react'
import { useFormik } from 'formik'
import { EmailIcon } from '@chakra-ui/icons'

import {
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Flex,
  useColorModeValue,
  ScaleFade,
  Center,
  Text,
} from '@chakra-ui/react'

interface FormValues {
  email: string
  message: string
}

export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      message: '',
    },

    validate: (values: FormValues) => {
      const errors: Partial<FormValues> = {}

      if (!values.email) {
        errors.email = 'Wpisz adres e-mail'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Dodaj poprawny adres email'
      }

      if (!values.message) {
        errors.message = 'Wpisz wiadomość'
      } else if (!/^.{4,}$/.test(values.message)) {
        errors.message = 'Trochę za krótka ta wiadomość'
      }

      return errors
    },

    onSubmit: (values) => {
      fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ ...values }),
      })
        .then(() => setIsSubmitted(true))
        .catch((err) => console.log(err))
    },
  })

  return isSubmitted ? (
    <ScaleFade initialScale={0.9} in={isSubmitted}>
      <Flex
        alignItems='center'
        justifyContent='center'
        direction='column'
        w={{ base: '100', md: '800px' }}
      >
        <Text fontSize='2xl'>Wiadomosć wysłana</Text>

        <Center>
          <EmailIcon boxSize={20} />
        </Center>
      </Flex>
    </ScaleFade>
  ) : (
    <form onSubmit={formik.handleSubmit}>
      <Flex
        alignItems='center'
        justifyContent='center'
        direction='column'
        w={{ base: '100', md: '500px' }}
      >
        <Text mt={4}>Napisz do nas</Text>

        <FormControl mt='2' isInvalid={!!formik.errors.email}>
          <FormLabel textAlign='center' htmlFor='email'>
            Email
          </FormLabel>
          <Input
            id='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            bg={useColorModeValue('gray.300', 'gray.700')}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
        </FormControl>
        <FormControl mt='2' isInvalid={!!formik.errors.message}>
          <FormLabel textAlign='center' htmlFor='message'>
            Wiadomość
          </FormLabel>
          <Textarea
            id='message'
            name='message'
            onChange={formik.handleChange}
            value={formik.values.message}
            h={40}
            bg={useColorModeValue('gray.300', 'gray.700')}
          />
          {formik.touched.message && formik.errors.message && (
            <div style={{ color: 'red' }}>{formik.errors.message}</div>
          )}
        </FormControl>
        <Button
          mt='2'
          type='submit'
          bg={useColorModeValue('gray.300', 'gray.700')}
        >
          Wyślij
        </Button>
      </Flex>
    </form>
  )
}
