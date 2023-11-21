import { useState } from 'react'
import { myFont } from '@/styles/fonts'
import { Box, Center, Text, Image, Flex } from '@chakra-ui/react'
import { rotateVertCenter } from '@/styles/animations'

export const CardMember = () => {
  const animation = `${rotateVertCenter} 0.9s linear both`
  const [active, setActive] = useState(false)

  return (
    <>
      <Box
        p={2}
        position='relative'
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        _hover={{ animation: animation }}
      >
        <Center color='white'>
          <Flex alignItems='center' justifyContent='center'>
            <Image
              src='/band/wojtek.jpg'
              boxSize='250px'
              alt='wojtek'
              _hover={{ filter: 'blur(5px)', animation: animation }}
              border='solid yinmn_blue.200'
              borderRadius='5px'
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
                  fontSize='24px'
                  color='white'
                  fontFamily={myFont.style.fontFamily}
                >
                  Name
                </Text>
                <Text
                  fontSize='24px'
                  color='white'
                  fontFamily={myFont.style.fontFamily}
                  background='none'
                >
                  Name
                </Text>
              </Box>
            )}
          </Flex>
        </Center>
      </Box>
    </>
  )
}
