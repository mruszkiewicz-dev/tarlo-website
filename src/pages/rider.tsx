import { MyText } from '@/components/ui/my-text'
import {
  Button,
  Flex,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  CardFooter,
  ButtonGroup,
  Image,
  Divider,
  Center,
} from '@chakra-ui/react'
export default function Rider() {
  return (
    <>
      <MyText>Rider</MyText>
      <Flex mt={{ base: 2, xl: 1 }} align='top' justifyContent='center'>
        <Card maxW='sm' m={{ base: '4', md: '0' }}>
          <CardBody>
            <Image
              src='/rack.jpg'
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Text>
                Zespół dysponuję własnym rackiem dźwiękowym oraz kompletnym
                systemem odsłuchowym. Technicy dźwięku, prosimy o uwzględnienie
                tego podczas przygotowań technicznych.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <Flex
            direction='column'
            justifyContent='center'
            alignItems='center'
            m={2}
            p={2}
          >
            <Button variant='solid'>
              <a
                href='/Tarło-rider.pdf'
                target='_blank'
                download
                type='application/pdf'
              >
                Pobierz
              </a>
            </Button>
          </Flex>
        </Card>
      </Flex>
    </>
  )
}
