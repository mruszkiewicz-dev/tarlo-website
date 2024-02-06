import { CardAlbum } from '@/components/ui/CardAlbum'
import { MyText } from '@/components/ui/MyText'
import { albums } from '@/data/data'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'

export default function Albums() {
  return (
    <>
      <Head>
        <title>Tarło - Albumy</title>
        <meta
          name='description'
          content='Przeglądaj naszą dyskografię - albumy zespołu Tarło. Znajdź najnowsze wydawnictwa i poznaj naszą muzyczną historię.'
        />
        <meta
          name='keywords'
          content='Tarło, albumy, dyskografia, najnowsze wydawnictwa, muzyka rockowa'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.tarlo.pl/albumy' />
      </Head>
      <MyText>Albumy</MyText>
      <Flex
        mt={{ base: 2, xl: 1 }}
        align='top'
        justifyContent='center'
        flexDirection={{ base: 'column', xl: 'row' }}
      >
        {albums.map((item) => (
          <CardAlbum key={item.id} {...item} />
        ))}
      </Flex>
    </>
  )
}
