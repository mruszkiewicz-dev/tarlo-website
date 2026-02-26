import { MyText } from '@/components/ui/MyText'
import { Flex } from '@chakra-ui/react'
import { CardMember } from '@/components/ui/CardMember'
import { band } from '@/data/data'
import { SeoHead } from '@/components/seo/SeoHead'

export default function Crew() {
  return (
    <>
      <SeoHead
        title='Tarlo - Zespol'
        description='Poznaj sklad zespolu Tarlo i role kazdego muzyka.'
        path='/crew'
        keywords='Tarlo sklad, muzycy, zespol'
      />
      <MyText>Zespol</MyText>
      <Flex
        mt={{ base: 2, xl: 10 }}
        align='center'
        justifyContent='center'
        flexDirection={{ base: 'column', xl: 'row' }}
        flexWrap='wrap'
        gap={{ base: 2, md: 3 }}
        px={{ base: 2, md: 4 }}
      >
        {band.map((item) => (
          <CardMember key={item.id} name={item.name} desc={item.desc} foto={item.title} />
        ))}
      </Flex>
    </>
  )
}
