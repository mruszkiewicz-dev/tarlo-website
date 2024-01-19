import { Box, AbsoluteCenter, Center } from '@chakra-ui/react'
import { MyText } from '@/components/ui/my-text'
import { Logo } from '@/components/ui/logo'

export default function Home() {
  return (
    <AbsoluteCenter>
      <MyText>Oficjalna strona Zespołu</MyText>
      <Center>
        <Logo h={300} w={400} />
      </Center>
    </AbsoluteCenter>
  )
}
