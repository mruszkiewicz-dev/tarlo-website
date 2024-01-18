'use client'

import { useEffect, useState } from 'react'
import { Flex, Grid, GridItem } from '@chakra-ui/react'
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
  console.log(data)
  return (
    <Flex
      w={{ base: '100%', md: '80%' }}
      align='center'
      justifyContent='center'
      mb={10}
    >
      <Grid templateColumns='repeat(4, 1fr)' gap={4}>
        {data.map((item) => {
          return (
            <GridItem>
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
            </GridItem>
          )
        })}
      </Grid>
    </Flex>
  )
}
