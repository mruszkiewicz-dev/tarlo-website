'use client'

import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/react'
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
        {data.map((item) => {
          return (
            <Box m={4}>
              <Image
                src={item.photo}
                width={500}
                height={500}
                alt={item.name}
                style={{
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Box>
          )
        })}
      </Box>
    </Flex>
  )
}
