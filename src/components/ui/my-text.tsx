import { myFont } from '@/styles/fonts'
import { Center, Text } from '@chakra-ui/react'

type TextProps = {
  children: string
}

export const MyText = ({ children }: TextProps) => {
  return (
    <Center color='white'>
      <Text
        pt={2}
        fontFamily={myFont.style.fontFamily}
        fontSize={{ base: '7xl', md: '8xl' }}
        align='center'
      >
        {children}
      </Text>
    </Center>
  )
}
