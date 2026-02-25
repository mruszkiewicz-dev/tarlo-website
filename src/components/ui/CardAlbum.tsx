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

export const CardAlbum: React.FC<CardAlbumProps> = ({
  name,
  id,
  desc,
  songs,
}) => {
  return (
    <Card m={8} align='center' maxW='md'>
      <CardHeader>
        <Heading size='md'>{name}</Heading>
      </CardHeader>
      <CardBody>
        <Box borderRadius='lg' overflow='hidden' mb={2}>
          <Image
            src={`/albums/${id}.jpg`}
            alt={`${name} okladka albumu`}
            width={500}
            height={500}
            sizes='(max-width: 768px) 100vw, 500px'
            style={{ width: '100%', height: 'auto' }}
          />
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
