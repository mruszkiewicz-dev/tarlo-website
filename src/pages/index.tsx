import Image from 'next/image'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box width='100%' height='100vh' position='relative'>
      <Image
        src='/background_home.jpg'
        layout='fill'
        objectFit='cover'
        alt='Tarło tło'
      />
    </Box>
  )
}
