import { MyText } from '@/components/ui/MyText'
import { Box, Text, Container, Stack } from '@chakra-ui/react'
import Head from 'next/head'

export default function About() {
  return (
    <Box>
      <Head>
        <title>Tarło - Zespół Muzyczny - O Nas</title>
        <meta
          name='description'
          content='Zespół TARŁO - Pięciu rockowo nastawionych do świata i ludzi instrumentalistów, z których jeden śpiewa. Poznaj historię zespołu, pasję do muzyki i wspólne licealne korzenie.'
        />
        <meta
          name='keywords'
          content='Tarło, zespół muzyczny, historia zespołu, muzyka rockowa, pasja do muzyki'
        />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://www.tarlo.pl/o-nas' />
      </Head>
      <MyText>O nas</MyText>
      <Container
         maxW="container.md"
        px={{ base: 4, md: 0 }}
        minH="60vh"
      >
                <Stack spacing={6} textAlign="center">

        <Text
          align='center'
          fontSize={{
            base: 'md',
            sm: 'xl',
            lg: 'xl',
            xl: '2xl',
            '2xl': '2xl',
          }}
        >
          Niektórych tematów nie można opowiedzieć w zwykły sposób - trzeba do
          tego użyć gitary, basu i perkusji i dopiero wtedy można wykrzyczeć do
          mikrofonu słowa!!! Zespół TARŁO to pięciu rockowo nastawionych do
          świata i ludzi instrumentalistów, z których jeden śpiewa. Część z nich
          pasja do muzyki połączyła już w czasach licealnych, kiedy grali razem
          w szkolnej kapeli. Kilka lat musiało upłynąć jednak aby życie
          dostarczyło (jak mówią) "odpowiedniej wrażliwości", a drzemiące oraz
          te nowe i nieopowiedziane historie mogły wreszcie zabrzmieć a często
          zaryczeć z gardła, jak to w rocku przystało!!! Inną kwestią jest to,
          że w pod koniec lat 90tych nasz młodszy kolega perkusista był jeszcze
          dzieckiem i trzeba było poczekać aż dorośnie i zacznie z nami grać!!!
          Zespół powstał w 2016 roku temu, aktualnie koncertuje gdzie się tylko
          da.
        </Text>
        </Stack>
      </Container>
    </Box>
  )
}
