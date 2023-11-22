import { MyText } from '@/components/ui/my-text'
import { Flex } from '@chakra-ui/react'
import { CardMember } from '@/components/ui/card-member'
import { band } from '@/data/data'

export default function Crew() {
  return (
    <>
      <MyText>Zespół</MyText>
      <Flex
        mt={{ base: 2, xl: 10 }}
        align='center'
        justifyContent='center'
        flexDirection={{ base: 'column', xl: 'row' }}
      >
        {band.map((item) => (
          <CardMember
            key={item.id}
            name={item.name}
            desc={item.desc}
            foto={item.id}
          />
        ))}
      </Flex>
    </>
  )
}
