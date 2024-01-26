import React, { ReactNode } from 'react'
import Head from 'next/head'
import { NavBar } from '@/components/ui/nav-bar'
import { Footer } from '@/components/ui/footer'
import { Box, Flex, Spacer } from '@chakra-ui/react'

type MainProps = {
  children: ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Oficjalna strona zespołu Tarło. Znajdź informacje o naszych koncertach, muzyce i najnowszych wydawnictwach.'
        />
        <meta name='author' content='Tarło' />
        <link rel='apple-touch-icon' href='//favicon.ico' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <meta property='og:site_name' content='Tarło' />
        <meta property='og:title' content='Tarło - Oficjalna Strona Zespołu' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://www.tarlo.pl/logo_black.png'
        />
        <title>Tarło - Oficjalna Strona Zespołu</title>
        <meta
          name='keywords'
          content='Tarło, Tarlo, zespół muzyczny, koncerty, muzyka, nowości muzyczne'
        />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        <link rel='canonical' href='https://www.tarlo.pl/' />
        <link
          rel='sitemap'
          type='application/xml'
          title='Sitemap'
          href='/sitemap.xml'
        />
      </Head>
      <Flex direction='column' minH='100vh'>
        <NavBar />
        <Box my={{ base: '2', md: '16' }} flex='1'>
          {children}
        </Box>
        <Spacer />
        <Footer />
      </Flex>
    </div>
  )
}

export default Main
