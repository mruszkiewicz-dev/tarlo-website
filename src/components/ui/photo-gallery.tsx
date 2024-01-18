// PhotoGallery.tsx

import { Flex } from '@chakra-ui/react'

// Function to fetch data
async function getData() {
  const res = await fetch('/api/concerts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

interface PhotoGalleryProps {
  data: any // Adjust the type based on the actual structure of your data
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ data }) => {
  console.log(data)

  return (
    <Flex
      w={{ base: '100%', md: '50%' }}
      align='center'
      justifyContent='center'
    >
      {/* Display your content or images here */}
    </Flex>
  )
}

export default PhotoGallery
