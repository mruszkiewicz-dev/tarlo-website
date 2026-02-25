import { ReactNode } from 'react'
import Head from 'next/head'
import { NavBar } from '@/components/ui/NavBar'
import { Footer } from '@/components/ui/Footer'
import { Box, Flex } from '@chakra-ui/react'

type MainProps = {
  children: ReactNode
}

const musicGroupSchema = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Tarlo',
  url: 'https://www.tarlo.pl',
  image: 'https://www.tarlo.pl/logo_black.png',
  genre: 'Rock',
  sameAs: [
    'https://open.spotify.com/artist/3q6XSZRNzCvuTsTWdgTb4V/discography',
    'https://music.apple.com/pl/artist/tar%C5%82o/1484447072',
    'https://www.instagram.com/tarlo_rockband/',
    'https://www.youtube.com/channel/UCAK10cFtn2SoFgZu-TsP1Tg',
    'https://www.facebook.com/tarlorockband/',
  ],
}

const Main = ({ children }: MainProps) => {
  return (
    <>
      <Head>
        <meta property='og:site_name' content='Tarlo' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://www.tarlo.pl/logo_black.png' />
        <meta name='theme-color' content='#0f1014' />
        <link rel='icon' href='/favicon.ico' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupSchema) }}
        />
      </Head>

      <Flex direction='column' minH='100vh'>
        <NavBar />
        <Box as='main' flex='1' my={{ base: 4, md: 4 }}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  )
}

export default Main

