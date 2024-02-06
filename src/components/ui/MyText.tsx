import { myFont } from '@/styles/fonts'
import { Center, Text } from '@chakra-ui/react'

type TextProps = {
  children: string
}

export const MyText = ({ children }: TextProps) => {
  return (
    <Center>
      <Text
        pt={0}
        mb={{ base: 0, md: 8 }}
        fontFamily={myFont.style.fontFamily}
        fontSize={{ base: '6xl', md: '7xl' }}
        align='center'
      >
        {children}
      </Text>
    </Center>
  )
}
