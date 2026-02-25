import { useEffect, useMemo, useState } from 'react'
import { Box, Button, Center, Flex, SimpleGrid, Skeleton } from '@chakra-ui/react'
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
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={4} w='100%' px={4}>
        {visiblePhotos.map((item, index) => (
          <ImageTile key={`${item.photo}-${index}`} src={item.photo} alt={item.name} />
        ))}
      </SimpleGrid>

      {hasMore ? (
        <Center mt={5}>
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
    <Box
      position='relative'
      borderRadius='10px'
      overflow='hidden'
      h={{ base: '240px', md: '260px' }}
      bg='blackAlpha.300'
    >
      <Skeleton isLoaded={isLoaded} w='100%' h='100%'>
        <Image
          src={src}
          alt={alt}
          fill
          sizes='(max-width: 480px) 100vw, (max-width: 992px) 50vw, (max-width: 1280px) 33vw, 25vw'
          loading='lazy'
          quality={65}
          style={{ objectFit: 'cover' }}
          onLoad={() => setIsLoaded(true)}
        />
      </Skeleton>
    </Box>
  )
}

