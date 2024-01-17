import { PhotoGallery } from '@/components/ui/photo-gallery'
import { MyText } from '@/components/ui/my-text'
import { Flex } from '@chakra-ui/react'

export default function Gallery() {
  return (
    <>
      <MyText>Galeria</MyText>
      <Flex mt={{ base: 2, xl: 10 }} align='center' justifyContent='center'>
        <PhotoGallery />
      </Flex>
    </>
  )
}
