import { Box, AbsoluteCenter } from '@chakra-ui/react'
import { MyText } from '@/components/ui/my-text'

export default function Home() {
  return (
    <Box
      backgroundImage="url('/background_home.jpg')"
      backgroundPosition='top'
      backgroundRepeat='no-repeat'
      backgroundSize='100%'
    >
      <AbsoluteCenter>
        <Box zIndex={1}>
          <MyText>Oficjalna strona Zespołu</MyText>
        </Box>
      </AbsoluteCenter>
    </Box>
  )
}
