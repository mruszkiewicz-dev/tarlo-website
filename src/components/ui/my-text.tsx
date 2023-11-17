import { myFont } from '@/styles/fonts'
import { Center, Text } from '@chakra-ui/react'

type Size = 'lg' | '6xl' | '8xl'

type TextProps = {
  children: string
  size: Size | object
}

export const MyText = ({ children, size }: TextProps) => {
  return (
    <Center color='white'>
      <Text
        pt={2}
        fontFamily={myFont.style.fontFamily}
        fontSize={size}
        align='center'
      >
        {children}
      </Text>
    </Center>
  )
}
