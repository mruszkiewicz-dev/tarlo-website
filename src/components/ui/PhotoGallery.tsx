import { useEffect, useMemo, useState } from 'react'
import { Box, Button, Center, Flex, Skeleton } from '@chakra-ui/react'
import Image from 'next/image'

export interface PhotoItem {
  photo: string
  name: string
}

type PhotoGalleryProps = {
  data: PhotoItem[]
}

const INITIAL_PHOTOS = 12
const PHOTOS_STEP = 12

export const PhotoGallery = ({ data }: PhotoGalleryProps) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_PHOTOS)

  useEffect(() => {
    setVisibleCount(INITIAL_PHOTOS)
  }, [data.length])

  const visiblePhotos = useMemo(() => data.slice(0, visibleCount), [data, visibleCount])
  const hasMore = visibleCount < data.length

  return (
    <Flex direction='column' w={{ base: '100%', md: '90%' }} align='center' justifyContent='center' mb={10} mx={2}>
      <Box padding={4} w='100%' mx='auto' sx={{ columnCount: [1, 2, 3, 4], columnGap: '12px' }}>
        {visiblePhotos.map((item, index) => (
          <Box key={`${item.photo}-${index}`} mb={4} sx={{ breakInside: 'avoid' }}>
            <ImageTile src={item.photo} alt={item.name} />
          </Box>
        ))}
      </Box>

      {hasMore ? (
        <Center mt={4}>
          <Button onClick={() => setVisibleCount((prev) => prev + PHOTOS_STEP)} colorScheme='red' variant='outline'>
            Pokaz wiecej
          </Button>
        </Center>
      ) : null}
    </Flex>
  )
}

const ImageTile = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Box position='relative' borderRadius='8px' overflow='hidden'>
      <Skeleton isLoaded={isLoaded} borderRadius='8px' minH='220px' />
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
        loading='lazy'
        quality={65}
        style={{
          objectFit: 'cover',
          borderRadius: '8px',
          width: '100%',
          height: 'auto',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.2s ease',
          position: isLoaded ? 'static' : 'absolute',
          inset: 0,
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </Box>
  )
}

