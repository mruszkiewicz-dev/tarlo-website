import { useState } from 'react'
import { myFont } from '@/styles/fonts'
import { Box, Flex, Skeleton, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

interface CardMemberProps {
  name: string
  desc: string
  foto: string
}

export const CardMember: React.FC<CardMemberProps> = ({ name, desc, foto }) => {
  const [active, setActive] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const isMobile = useBreakpointValue({ base: true, md: false }) ?? false
  const mobileDescColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Box p={2}>
      <Flex direction='column' align='center'>
        <Box
          position='relative'
          w={{ base: '88vw', sm: '300px', md: '300px' }}
          h={{ base: '88vw', sm: '300px', md: '300px' }}
          maxW='320px'
          maxH='320px'
          border='1px solid'
          borderColor='yinmn_blue.200'
          borderRadius='8px'
          overflow='hidden'
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <Skeleton isLoaded={isLoaded} w='100%' h='100%'>
            <Image
              src={`/band/${foto}.jpg`}
              alt={`${name} - ${desc}`}
              fill
              sizes='(max-width: 768px) 88vw, 300px'
              loading='lazy'
              quality={75}
              style={{ objectFit: 'cover', filter: active && !isMobile ? 'blur(4px)' : 'none' }}
              onLoad={() => setIsLoaded(true)}
            />
          </Skeleton>

          {!isMobile && active ? (
            <Box
              position='absolute'
              inset={0}
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              bg='blackAlpha.500'
              textAlign='center'
              px={3}
            >
              <Text fontSize={26} color='red.500' fontFamily={myFont.style.fontFamily}>
                {name}
              </Text>
              <Text fontSize={22} color='white' fontFamily={myFont.style.fontFamily}>
                {desc}
              </Text>
            </Box>
          ) : null}
        </Box>

        {isMobile ? (
          <Box textAlign='center' mt={2}>
            <Text fontSize='2xl' color='red.500' fontFamily={myFont.style.fontFamily}>
              {name}
            </Text>
            <Text fontSize='xl' color={mobileDescColor} fontFamily={myFont.style.fontFamily}>
              {desc}
            </Text>
          </Box>
        ) : null}
      </Flex>
    </Box>
  )
}
