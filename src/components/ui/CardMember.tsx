import { useState } from 'react'
import { myFont } from '@/styles/fonts'
import { Box, Center, Text, Image, Flex, Spinner } from '@chakra-ui/react'

interface CardMemberProps {
  name: string
  desc: string
  foto: string
}

export const CardMember: React.FC<CardMemberProps> = ({ name, desc, foto }) => {
  const [active, setActive] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // Stan informujący o ładowaniu obrazka

  return (
    <>
      <Box
        p={2}
        position='relative'
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Center color='white'>
          <Flex alignItems='center' justifyContent='center'>
            {isLoading && <Spinner size='lg' />}
            <Image
              src={`/band/${foto}.jpg`}
              alt={`${name} - ${desc}`}
              boxSize='300px'
              style={{ filter: active ? 'blur(5px)' : 'none' }}
              border='solid yinmn_blue.200'
              borderRadius='5px'
              onLoad={() => setIsLoading(false)}
            />
            {active && (
              <Box
                position='absolute'
                top='55%'
                left='50%'
                transform='translate(-50%, -50%)'
                textAlign='center'
                background='none'
              >
                <Text
                  fontSize={26}
                  color='red.600'
                  fontFamily={myFont.style.fontFamily}
                >
                  {name}
                </Text>
                <Text
                  fontSize={22}
                  color='white'
                  fontFamily={myFont.style.fontFamily}
                >
                  {desc}
                </Text>
              </Box>
            )}
          </Flex>
        </Center>
      </Box>
    </>
  )
}
