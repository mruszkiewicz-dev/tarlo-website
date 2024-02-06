import { PhotoGallery } from '@/components/ui/PhotoGallery'
import { MyText } from '@/components/ui/MyText'
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const PhotoGalleryDynamic = dynamic(
  () => import('@/components/ui/PhotoGallery').then((mod) => mod.PhotoGallery),
  {
    loading: () => <p>Loading...</p>,
  },
)

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Tarło - Galeria Zdjęć Koncertowych</title>
        <meta
          name='description'
          content='Przeglądaj naszą galerię zdjęć z niezapomnianych koncertów zespołu Tarło. Zobacz emocje i atmosferę naszych występów.'
        />
        <meta
          name='keywords'
          content='Tarło, galeria koncertowa, zdjęcia koncertowe, atmosfera koncertu, emocje, muzyka na żywo'
        />
        <meta name='robots' content='index, follow' />
        <meta
          property='og:title'
          content='Tarło - Galeria Zdjęć Koncertowych'
        />
        <meta
          property='og:description'
          content='Przeglądaj naszą galerię zdjęć z niezapomnianych koncertów zespołu Tarło. Zobacz emocje i atmosferę naszych występów.'
        />
        <meta
          property='og:image'
          content='https://www.tarlo.pl/galeria-cover.jpg'
        />
        <link rel='canonical' href='https://www.tarlo.pl/galeria' />
      </Head>
      <MyText>Galeria</MyText>
      <Flex mt={{ base: 2, xl: 10 }} align='center' justifyContent='center'>
        <PhotoGalleryDynamic />
      </Flex>
    </>
  )
}
