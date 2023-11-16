import { myFont } from '@/styles/fonts'
import { Center, Text } from '@chakra-ui/react'

type TextProps = {
  children: string
  size: 'lg' | '8xl'
}

export const MyText = ({ children, size }: TextProps) => {
  return (
    <Center bg='tomato' h='100px' color='white'>
      <Text fontFamily={myFont.style.fontFamily} fontSize={size}>
        {children}
      </Text>
    </Center>
  )
}
