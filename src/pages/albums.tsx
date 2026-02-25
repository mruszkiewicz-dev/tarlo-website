import { CardAlbum } from '@/components/ui/CardAlbum'
import { MyText } from '@/components/ui/MyText'
import { albums } from '@/data/data'
import { Flex } from '@chakra-ui/react'
import { SeoHead } from '@/components/seo/SeoHead'

export default function Albums() {
  const schema = albums.map((album) => ({
    '@context': 'https://schema.org',
    '@type': 'MusicAlbum',
    name: album.name,
    url: `https://www.tarlo.pl/albums#${album.id}`,
    image: `https://www.tarlo.pl/albums/${album.id}.jpg`,
    byArtist: {
      '@type': 'MusicGroup',
      name: 'Tarlo',
    },
  }))

  return (
    <>
      <SeoHead
        title='Tarlo - Albumy'
        description='Dyskografia zespolu Tarlo. Poznaj albumy i utwory oraz przejdz do streamingu.'
        path='/albums'
        keywords='Tarlo albumy, dyskografia, utwory'
        schema={schema}
      />
      <MyText>Albumy</MyText>
      <Flex mt={1} align='top' justifyContent='center' flexDirection={{ base: 'column', xl: 'row' }}>
        {albums.map((item) => (
          <CardAlbum key={item.id} {...item} />
        ))}
      </Flex>
    </>
  )
}

