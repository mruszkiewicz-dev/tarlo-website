import { ReactNode } from 'react'
import Head from 'next/head'
import { NavBar } from '@/components/ui/NavBar'
import { Footer } from '@/components/ui/Footer'
import { Box, Flex } from '@chakra-ui/react'

type MainProps = {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <>
      <Head>
        <title>Tarło - Oficjalna Strona Zespołu</title>

        <meta
          name="description"
          content="Oficjalna strona zespołu Tarło. Informacje o koncertach, muzyce i najnowszych wydawnictwach."
        />

        <meta property="og:site_name" content="Tarło" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.tarlo.pl/logo_black.png"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex direction="column" minH="100vh">
        <NavBar />

        <Box as="main" flex="1" my={{ base: 4, md: 4 }}>
          {children}
        </Box>

        <Footer />
      </Flex>
    </>
  )
}

export default Main
