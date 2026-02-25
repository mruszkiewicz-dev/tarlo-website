import fs from 'fs'
import path from 'path'
import type { GetStaticProps } from 'next'
import { PhotoGallery, PhotoItem } from '@/components/ui/PhotoGallery'
import { MyText } from '@/components/ui/MyText'
import { Flex } from '@chakra-ui/react'
import { SeoHead } from '@/components/seo/SeoHead'

type GalleryProps = {
  photos: PhotoItem[]
}

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  const filePath = path.join(process.cwd(), 'public', 'photo.txt')
  const file = fs.readFileSync(filePath, 'utf-8')
  const photos = file
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line, index) => ({
      photo: line,
      name: `Tarlo koncert ${index + 1}`,
    }))

  return {
    props: { photos },
    revalidate: 60 * 60 * 6,
  }
}

export default function Gallery({ photos }: GalleryProps) {
  return (
    <>
      <SeoHead
        title='Tarlo - Galeria koncertowa'
        description='Galeria zdjec koncertowych zespolu Tarlo. Zobacz kadry z naszych wystepow na zywo.'
        path='/gallery'
        keywords='Tarlo galeria, zdjecia koncertowe, koncerty rock'
        image='https://www.tarlo.pl/logo_black.png'
      />
      <MyText>Galeria</MyText>
      <Flex mt={{ base: 2, xl: 10 }} align='center' justifyContent='center'>
        <PhotoGallery data={photos} />
      </Flex>
    </>
  )
}

