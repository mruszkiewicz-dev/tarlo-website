import { useState } from 'react'
import {
  Flex,
  Text,
  Card,
  Heading,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Box,
  Skeleton,
} from '@chakra-ui/react'
import { CardAlbumSong } from './CardAlbumSong'
import Image from 'next/image'

interface DescItem {
  title: string
  desc: string
}

export interface SongsItem {
  title: string
  yt: string
  spotify: string
  itunes: string
  tidal: string
}

interface CardAlbumProps {
  name: string
  id: string
  desc: DescItem[]
  songs: SongsItem[]
}

const coverPositionByAlbum: Record<string, string> = {
  prolog: 'center 78%',
  lawka: 'center 72%',
  perlowe: 'center 70%',
}

export const CardAlbum: React.FC<CardAlbumProps> = ({
  name,
  id,
  desc,
  songs,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const coverPosition = coverPositionByAlbum[id] || 'center center'

  return (
    <Card m={8} align='center' maxW='md'>
      <CardHeader>
        <Heading size='md'>{name}</Heading>
      </CardHeader>
      <CardBody>
        <Box
          borderRadius='lg'
          overflow='hidden'
          mb={3}
          bg='blackAlpha.400'
          sx={{ aspectRatio: '1 / 1' }}
        >
          <Skeleton isLoaded={isImageLoaded} w='100%' h='100%' borderRadius='lg'>
            <Box position='relative' w='100%' h='100%'>
              <Image
                src={`/albums/${id}.jpg`}
                alt={`${name} okladka albumu`}
                fill
                sizes='(max-width: 768px) 92vw, (max-width: 1280px) 33vw, 420px'
                loading='lazy'
                quality={70}
                style={{
                  objectFit: 'cover',
                  objectPosition: coverPosition,
                }}
                onLoad={() => setIsImageLoaded(true)}
              />
            </Box>
          </Skeleton>
        </Box>
        {desc.map((item, index) => (
          <Flex
            key={index}
            direction={{ base: 'column', md: 'row' }}
            alignItems='center'
            justifyContent='center'
          >
            <Text fontSize='md'>{item.title}:</Text>
            <Text fontSize='md' pl={1} color='red.600'>
              {item.desc}
            </Text>
          </Flex>
        ))}
      </CardBody>
      <Divider width={60} />

      <CardFooter>
        <CardAlbumSong songs={songs} />
      </CardFooter>
    </Card>
  )
}
