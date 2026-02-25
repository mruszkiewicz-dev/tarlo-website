import { Box, List, SimpleGrid, Link } from '@chakra-ui/react'
import { SongsItem } from './CardAlbum'
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
            {item.yt && item.yt !== 'null' ? (
              <Link
                href={`https://www.youtube.com/watch?v=${item.yt}`}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`YouTube - ${item.title}`}
              >
                <IconBrandYoutube />
              </Link>
            ) : null}
            <Link
              href={`https://music.apple.com/pl/album/${item.itunes}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Apple Music - ${item.title}`}
            >
              <IconBrandApple />
            </Link>
            <Link
              href={`https://open.spotify.com/track/${item.spotify}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Spotify - ${item.title}`}
            >
              <IconBrandSpotify />
            </Link>
            <Link
              href={`https://tidal.com/browse/track/${item.tidal}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Tidal - ${item.title}`}
            >
              <IconBrandTidal />
            </Link>
          </Box>
        </SimpleGrid>
      ))}
    </List>
  )
}
