import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/react'

interface DescItem {
  title: string
  desc: string
}

interface CardAlbumProps {
  name: string
  id: string
  desc: DescItem[]
}

export const CardAlbum: React.FC<CardAlbumProps> = ({ name, id, desc }) => {
  return (
    <Box mx={10} my={2}>
      <Flex alignItems='center' justifyContent='center' direction='column'>
        <Text fontSize={30}>{name}</Text>
        <Image src={`/albums/${id}.jpg`} width={290} height={290} alt={name} />
        {desc.map((item, index) => (
          <Flex
            key={index}
            mt={1}
            direction={{ base: 'column', md: 'row' }}
            alignItems='center'
            justifyContent='center'
          >
            <Text fontSize={20}>{item.title}:</Text>
            <Text fontSize={20} ml={1} color='red.600'>
              {item.desc}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  )
}
