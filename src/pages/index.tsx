import Image from 'next/image'
import { Box, Flex } from '@chakra-ui/react'
import { MyText } from '@/components/ui/my-text'

export default function Home() {
  return (
    <Box height='90vh' bgColor='#AFB2BA'>
      <Box display={{ base: 'none', lg: 'flex', '2xl': 'none' }}>
        <Image
          src='/background_home.jpg'
          fill
          sizes='100vh'
          objectFit='cover'
          alt='Tarło tło'
        />
      </Box>
      <Box display={{ base: 'none', md: 'none', '2xl': 'flex' }}>
        <Image
          src='/background_home.jpg'
          fill
          sizes='100vh'
          objectFit='contain'
          alt='Tarło tło'
        />
      </Box>

      <Flex height='90%' alignItems='center' justifyContent='center'>
        <Box zIndex={10}>
          <MyText size={{ base: '7xl', md: '8xl' }}>
            Oficjalna strona Zespołu
          </MyText>
        </Box>
      </Flex>
    </Box>
  )
}
