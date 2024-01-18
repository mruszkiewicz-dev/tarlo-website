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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Tarło - Oficjalna Strona Zespołu' />
        <meta name='author' content='Tarło' />
        <meta name='author' content='tarlo' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <meta property='og:site_name' content='Tarło' />
        <meta name='og:title' content='Tarło' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='https://www.tarlo.pl/logo.svg' />
        <title>Tarło - Oficjalna Strona Zespołu</title>
      </Head>
      <Flex direction='column' minH='100vh'>
        <NavBar />
        <Box mt={16} flex='1'>
          {children}
        </Box>
        <Spacer />
        <Footer />
      </Flex>
    </div>
  )
}

export default Main
