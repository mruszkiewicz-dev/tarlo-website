import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/react'

async function getData() {
  const res = await fetch('/api/concerts')

  if (!res.ok) {
    throw new Error('Błąd')
  }

  return res.json()
}

export const PhotoGallery = () => {
  return (
    <>
      <Flex
        w={{ base: '100%', md: '50%' }}
        align='center'
        justifyContent='center'
      >
        <Image src='/band/bartek.jpg' alt='photo' width={20} height={20} />
      </Flex>
    </>
  )
}
