import { Box, AbsoluteCenter, Center } from '@chakra-ui/react'
import { MyText } from '@/components/ui/my-text'
import { Logo } from '@/components/ui/logo'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tarło - Oficjalna Strona Zespołu</title>
        <meta
          name='description'
          content='Oficjalna strona zespołu Tarło. Znajdź najnowsze informacje o zespole, koncertach, albumach i więcej.'
        />
        <meta
          name='keywords'
          content='Tarło, zespół muzyczny, koncerty, albumy, muzyka rockowa'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.tarlo.pl/' />
      </Head>
      <AbsoluteCenter>
        <MyText>Oficjalna strona Zespołu</MyText>
        <Center>
          <Logo h={300} w={400} />
        </Center>
      </AbsoluteCenter>
    </>
  )
}
