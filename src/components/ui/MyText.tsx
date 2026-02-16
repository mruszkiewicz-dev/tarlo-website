import { myFont } from '@/styles/fonts'
import { Center, Heading } from '@chakra-ui/react'

type TextProps = {
  children: string
}

export const MyText = ({ children, ...props }: TextProps) => {
  return (
    <Center>
    <Heading
      as="h1"
      textAlign="center"
      mb={{ base: 2, md: 4 }}
      fontFamily={myFont.style.fontFamily}
      fontSize={{ base: '5xl', md: '6xl' }}
      {...props}
    >
      {children}
    </Heading>
    </Center>
  )
}
