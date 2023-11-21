import Image from 'next/image'
import { Box, Flex, AbsoluteCenter } from '@chakra-ui/react'
import { MyText } from '@/components/ui/my-text'

export default function Home() {
  return (
    <Flex direction='column' minHeight='100%'>
      <Box display={{ base: 'none', lg: 'flex', '2xl': 'none' }} mt={20}>
        <Image
          src='/background_home.jpg'
          fill
          objectFit='cover'
          alt='Tarło tło'
        />
      </Box>
      <Box display={{ base: 'none', md: 'none', '2xl': 'flex' }} mt={20}>
        <Image
          src='/background_home.jpg'
          fill
          objectFit='contain'
          alt='Tarło tło'
        />
      </Box>
      <AbsoluteCenter>
        <Box zIndex={1}>
          <MyText>Oficjalna strona Zespołu</MyText>
        </Box>
      </AbsoluteCenter>
    </Flex>
  )
}
