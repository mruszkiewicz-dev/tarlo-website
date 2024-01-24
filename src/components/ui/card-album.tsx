import {
  Box,
  Flex,
  Text,
  Card,
  Heading,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Divider,
  List,
  ListItem,
  Button,
} from '@chakra-ui/react'
import { CardAlbumSong } from './CardAlbumSong'

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
        <Image src={`/albums/${id}.jpg`} alt={name} borderRadius='lg' mb={2} />
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
