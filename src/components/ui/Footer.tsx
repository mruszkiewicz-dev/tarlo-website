import { Box, Flex, Text, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      bg="black"
      color="white"
      justify="center"
      align="center"
      py={6}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      gap={8}
    >
      {/* Streaming */}
      <Flex direction="column" align="center" gap={3}>
        <Text fontSize={{ base: 'sm', md: 'md' }}>
          POSŁUCHAJ SOBIE NA
        </Text>

        <Flex gap={4}>
          <Link
            href="https://open.spotify.com/artist/3q6XSZRNzCvuTsTWdgTb4V/discography"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/media/spotify.jpg"
              width={120}
              height={40}
              alt="Spotify Tarło"
            />
          </Link>

          <Link
            href="https://music.apple.com/pl/artist/tar%C5%82o/1484447072"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/media/itunes.jpg"
              width={120}
              height={40}
              alt="Apple Music Tarło"
            />
          </Link>
        </Flex>
      </Flex>

      <Divider
        orientation="vertical"
        display={{ base: 'none', md: 'block' }}
        height="60px"
        borderColor="whiteAlpha.400"
      />

      {/* Social */}
      <Flex direction="column" align="center" gap={3}>
        <Text fontSize={{ base: 'sm', md: 'md' }}>
          ZNAJDZIESZ NAS
        </Text>

        <Flex gap={5}>
          <Link
            href="https://www.instagram.com/tarlo_rockband/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/media/ins.svg"
              width={30}
              height={30}
              alt="Instagram Tarło"
            />
          </Link>

          <Link
            href="https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/media/yt.svg"
              width={30}
              height={30}
              alt="YouTube Tarło"
            />
          </Link>

          <Link
            href="https://www.facebook.com/tarlorockband/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/media/fb.svg"
              width={30}
              height={30}
              alt="Facebook Tarło"
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
