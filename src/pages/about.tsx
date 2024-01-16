import { MyText } from '@/components/ui/my-text'
import { Box, Text, Flex } from '@chakra-ui/react'

export default function About() {
  return (
    <Box>
      <MyText>O nas</MyText>
      <Flex
        px={{ base: 20, xl: '200px', '2xl': '440px' }}
        alignItems='center'
        justifyContent='center'
        minHeight='60vh'
      >
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
      </Flex>
    </Box>
  )
}
