'use client'

import { MyText } from '@/components/ui/MyText'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const ConcertListDynamic = dynamic(
  () => import('@/components/ui/ConcertList').then((mod) => mod.ConcertList),
  {
    loading: () => <p>Loading...</p>,
  },
)
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
        <ConcertListDynamic />
      </Flex>
    </>
  )
}
