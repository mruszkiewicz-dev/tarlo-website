import { useState } from 'react'
import { Flex, Box, Spinner } from '@chakra-ui/react'
import Image from 'next/image'

export interface PhotoItem {
  photo: string
  name: string
}

type PhotoGalleryProps = {
  data: PhotoItem[]
}

export const PhotoGallery = ({ data }: PhotoGalleryProps) => {
  return (
    <Flex w={{ base: '100%', md: '90%' }} align='center' justifyContent='center' mb={10} mx={2}>
      <Box padding={4} w='100%' mx='auto' sx={{ columnCount: [1, 2, 3, 4], columnGap: '12px' }}>
        {data.map((item, index) => (
          <Box key={`${item.photo}-${index}`} mb={4} breakInside='avoid'>
            <ImageLoader src={item.photo} alt={item.name} />
          </Box>
        ))}
      </Box>
    </Flex>
  )
}

const ImageLoader = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? <Spinner size='md' /> : null}
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        sizes='(max-width: 768px) 100vw, 33vw'
        style={{
          objectFit: 'cover',
          borderRadius: '8px',
          width: '100%',
          height: 'auto',
          display: isLoading ? 'none' : 'block',
        }}
        onLoad={() => setIsLoading(false)}
      />
    </>
  )
}

