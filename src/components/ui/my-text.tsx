import { myFont } from '@/styles/fonts'
import { Center, Text } from '@chakra-ui/react'

type Size = 'lg' | '8xl'

type TextProps = {
  children: string
  size: Size | object
}

export const MyText = ({ children, size }: TextProps) => {
  return (
    <Center bg='tomato' h='100px' color='white'>
      <Text fontFamily={myFont.style.fontFamily} fontSize={size} align='center'>
        {children}
      </Text>
    </Center>
  )
}
