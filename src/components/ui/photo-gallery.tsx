'use client'

import { useEffect, useState } from 'react'
import { Flex, Box, border } from '@chakra-ui/react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

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
  console.log(data)
  return (
    <Flex
      w={{ base: '100%', md: '50%' }}
      align='center'
      justifyContent='center'
    >
      {data.map((item) => (
        <Box m={2}>
          <Image
            src={item.photo}
            width={200}
            height={200}
            alt={item.name}
            style={{
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </Box>
      ))}
    </Flex>
  )
}
