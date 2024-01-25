import { MyText } from '@/components/ui/my-text'
import { Flex } from '@chakra-ui/react'
import { CardMember } from '@/components/ui/card-member'
import { band } from '@/data/data'
import Head from 'next/head'

export default function Crew() {
  return (
    <>
      <Head>
        <title>Tarło - Zespół</title>
        <meta
          name='description'
          content='Poznaj członków zespołu Tarło. Zobacz naszych muzyków, ich opisy i dowiedz się więcej o naszym muzycznym składzie.'
        />
        <meta
          name='keywords'
          content='Tarło, zespół, członkowie zespołu, muzycy, skład zespołu'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.tarlo.pl/zespol' />
      </Head>
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
            foto={item.title}
          />
        ))}
      </Flex>
    </>
  )
}
