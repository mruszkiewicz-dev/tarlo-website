import React, { useEffect, useState } from 'react'
import { Flex, Box, Spinner } from '@chakra-ui/react'
import Image from 'next/image'

interface Photo {
  photo: string
  name: string
}

async function getData() {
  const res = await fetch('/api/photo')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const PhotoGallery = () => {
  const [data, setData] = useState<Photo[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData()
        setData(result)
      } catch (error) {
        console.error('Wystąpił błąd:')
      }
    }

    fetchData()
  }, [])

  return (
    <Flex
      w={{ base: '100%', md: '80%' }}
      align='center'
      justifyContent='center'
      mb={10}
      mx={2}
    >
      <Box
        padding={4}
        w='100%'
        mx='auto'
        sx={{ columnCount: [1, 2, 3, 4], columnGap: '2px' }}
      >
        {data.map((item, index) => (
          <Box key={index} m={4}>
            {/*
              Użyj stanu isLoading dla każdego obrazka osobno
              Aby pokazać ładowanie dla każdego obrazka osobno,
              możesz użyć state'u isLoading dla każdego elementu
              */}
            <ImageLoader src={item.photo} alt={item.name} />
          </Box>
        ))}
      </Box>
    </Flex>
  )
}

// Komponent ImageLoader, który renderuje Image z ładowaniem
const ImageLoader: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Spinner size='xl' />}{' '}
      {/* Pokaż Spinner, jeśli obrazek jest w trakcie ładowania */}
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        style={{
          objectFit: 'cover',
          borderRadius: '8px',
          visibility: isLoading ? 'hidden' : 'visible', // Ukryj obrazek podczas ładowania
        }}
        onLoad={() => setIsLoading(false)} // Ustawienie stanu na false po załadowaniu obrazka
      />
    </>
  )
}
