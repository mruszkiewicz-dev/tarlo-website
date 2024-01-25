import { MyText } from '@/components/ui/my-text'
import { Flex } from '@chakra-ui/react'
import { ConcertList } from '@/components/ui/concert-list'
import { Suspense } from 'react'
import Head from 'next/head'

export default function Concerts() {
  return (
    <>
      <Head>
        <title>Tarło - Koncerty</title>
        <meta
          name='description'
          content='Sprawdź najnowszy grafik koncertów zespołu Tarło. Znajdź informacje o nadchodzących występach i bądź na bieżąco z naszymi koncertami.'
        />
        <meta
          name='keywords'
          content='Tarło, koncerty, grafik koncertowy, występy na żywo, muzyka rockowa'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.tarlo.pl/koncerty' />
      </Head>
      <MyText>Koncerty</MyText>
      <Flex mt={{ base: 2, xl: 10 }} align='center' justifyContent='center'>
        <Suspense fallback={<p>Loading feed...</p>}>
          <ConcertList />
        </Suspense>
      </Flex>
    </>
  )
}
