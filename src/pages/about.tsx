import { SeoHead } from '@/components/seo/SeoHead'
import { MyText } from '@/components/ui/MyText'
import { Box, Container, Stack, Text } from '@chakra-ui/react'

export default function About() {
  return (
    <Box>
      <SeoHead
        title='Tarlo - O nas'
        description='Poznaj zespol Tarlo, jego historie i brzmienie. Sprawdz jak powstaly nasze utwory i gdzie gramy.'
        path='/about'
        keywords='Tarlo, o nas, historia zespolu, rock'
      />
      <MyText>O nas</MyText>
      <Container maxW='container.md' px={{ base: 4, md: 0 }} minH='60vh'>
        <Stack spacing={6} textAlign='center'>
          <Text fontSize={{ base: 'md', sm: 'xl', lg: 'xl', xl: '2xl', '2xl': '2xl' }}>
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

