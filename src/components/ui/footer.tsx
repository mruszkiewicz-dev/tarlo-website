import { Box, Flex, LightMode, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Box zIndex={9999}>
      <Flex
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
        bgColor='#000000'
        as='footer'
        w='100%'
        h={20}
        py={2}
        bottom='0'
      >
        <Box pb={2}>
          <Text color='white'>POSŁUCHAJ SOBIE NA</Text>
        </Box>
        <Flex>
          <Box px={1}>
            <Link
              href='https://open.spotify.com/artist/3q6XSZRNzCvuTsTWdgTb4V/discography'
              target='_blank'
            >
              <Image
                src='/media/spotify.jpg'
                width={120}
                height={40}
                alt='Posłuchaj Tarło na Spotify'
              />
            </Link>
          </Box>
          <Box px={1}>
            <Link
              href='https://music.apple.com/pl/artist/tar%C5%82o/1484447072'
              target='_blank'
            >
              <Image
                src='/media/itunes.jpg'
                width={120}
                height={40}
                className='hidden md:block'
                alt='Posłuchaj Tarło na ITunes'
              />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
