import { useFormik } from 'formik'
import { Input } from '@chakra-ui/react'

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
      <Input
        id='email'
        name='email'
        type='email'
        variant='filled'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    </form>
  )
}
