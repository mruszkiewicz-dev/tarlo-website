import { myFont } from '@/styles/fonts'
import { Box, Center, Text, Image, Flex } from '@chakra-ui/react'
import { rotateVertCenter } from '@/styles/animations'

export const CardMember = () => {
  const animation = `${rotateVertCenter} 0.9s linear both`

  return (
    <>
      <Box p={2} position='relative'>
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
            <Box
              position='absolute'
              top='55%'
              left='50%'
              transform='translate(-50%, -50%)'
              textAlign='center'
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
              >
                Name
              </Text>
            </Box>
          </Flex>
        </Center>
      </Box>
    </>
  )
}
