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
  List,
  SimpleGrid,
  Grid,
  Link,
  Center,
} from '@chakra-ui/react'
import { SongsItem } from './card-album'
import {
  IconBrandTidal,
  IconBrandSpotify,
  IconBrandYoutube,
  IconBrandApple,
} from '@tabler/icons-react'

interface CardAlbumSongProps {
  songs: SongsItem[]
}

export const CardAlbumSong: React.FC<CardAlbumSongProps> = ({ songs }) => {
  return (
    <List>
      {songs.map((item, index) => (
        <SimpleGrid
          key={index}
          columns={2}
          gap={2}
          my={2}
          justifyContent='center'
          width={60}
        >
          <Box>{item.title}</Box>
          <Box display='flex' justifyContent='space-around' alignItems='center'>
            <Link
              href={`https://www.youtube.com/watch?v=${item.yt}`}
              target='_blank'
            >
              <IconBrandYoutube />
            </Link>
            <Link
              href={`https://music.apple.com/pl/album/${item.itunes}`}
              target='_blank'
            >
              <IconBrandApple />
            </Link>
            <Link
              href={`https://open.spotify.com/track/${item.spotify}`}
              target='_blank'
            >
              <IconBrandSpotify />
            </Link>
            <Link
              href={`https://tidal.com/browse/track/${item.tidal}`}
              target='_blank'
            >
              <IconBrandTidal />
            </Link>
          </Box>
        </SimpleGrid>
      ))}
    </List>
  )
}
