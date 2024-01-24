import { CardAlbum } from '@/components/ui/card-album'
import { MyText } from '@/components/ui/my-text'
import { albums } from '@/data/data'
import { Flex } from '@chakra-ui/react'

export default function Albums() {
  return (
    <>
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
