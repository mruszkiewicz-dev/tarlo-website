import { MyText } from '@/components/ui/my-text'
import { CardAlbum } from '@/components/ui/card-album'
import { Flex } from '@chakra-ui/react'
import { albums } from '@/data/data'
export default function Music() {
  return (
    <>
      <MyText>Rzuć uchem</MyText>
      <Flex
        mt={{ base: 2, xl: 1 }}
        align='center'
        justifyContent='center'
        flexDirection={{ base: 'column', xl: 'row' }}
      >
        {albums.map((item) => (
          <CardAlbum
            key={item.id}
            name={item.name}
            desc={item.desc}
            id={item.id}
          />
        ))}
      </Flex>
    </>
  )
}
