import { Box, Flex, Text, Divider, Center } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Flex
      zIndex={9999}
      justifyContent='center'
      alignItems='center'
      as='footer'
      w='100%'
      bgColor='#000000'
    >
      <Flex
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
        h={20}
        py={2}
        bottom='0'
        w={200}
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
      <Box height='50px' px={1}>
        <Divider orientation='vertical' colorScheme='whiteAlpha' size='10' />
      </Box>
      <Flex
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
        h={20}
        py={2}
        bottom='0'
        p={2}
        w={200}
      >
        <Box pb={2}>
          <Text color='white'>ZNAJDZIESZ NAS</Text>
        </Box>
        <Flex>
          <Box px={2}>
            <Link
              href='https://www.instagram.com/tarlo_rockband/'
              target='_blank'
            >
              <Image
                src='/media/ins.svg'
                width={30}
                height={30}
                alt='Posłuchaj Tarło na Spotify'
              />
            </Link>
          </Box>
          <Box px={2}>
            <Link
              href='https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg'
              target='_blank'
            >
              <Image
                src='/media/yt.svg'
                width={30}
                height={30}
                className='hidden md:block'
                alt='Posłuchaj Tarło na ITunes'
              />
            </Link>
          </Box>
          <Box px={2}>
            <Link
              href='https://www.facebook.com/tarlorockband/'
              target='_blank'
            >
              <Image
                src='/media/fb.svg'
                width={30}
                height={30}
                className='hidden md:block'
                alt='Posłuchaj Tarło na ITunes'
              />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}
