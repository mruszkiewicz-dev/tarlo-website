import { MyText } from '@/components/ui/my-text'
import { Flex } from '@chakra-ui/react'
import { ConcertList } from '@/components/ui/concert-list'
import { Suspense } from 'react'

export default function Concerts() {
  return (
    <>
      <MyText>Koncerty</MyText>
      <Flex mt={{ base: 2, xl: 10 }} align='center' justifyContent='center'>
        <Suspense fallback={<p>Loading feed...</p>}>
          <ConcertList />
        </Suspense>
      </Flex>
    </>
  )
}
