import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { alegreya } from './fonts'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#fef6ec', '#06101c')(props),
    },
  }),
}

const colors = {
  atomic_tangerine: {
    DEFAULT: '#f79256',
    100: '#3f1903',
    200: '#7f3206',
    300: '#be4b09',
    400: '#f46715',
    500: '#f79256',
    600: '#f9a677',
    700: '#fabc99',
    800: '#fcd3bb',
    900: '#fde9dd',
  },
  sunset: {
    DEFAULT: '#fbd1a2',
    100: '#4f2c03',
    200: '#9f5807',
    300: '#ee840a',
    400: '#f8ab53',
    500: '#fbd1a2',
    600: '#fcdbb5',
    700: '#fde4c7',
    800: '#fdedda',
    900: '#fef6ec',
  },
  tiffany_blue: {
    DEFAULT: '#7dcfb6',
    100: '#123027',
    200: '#24614e',
    300: '#369176',
    400: '#4cbd9b',
    500: '#7dcfb6',
    600: '#97d8c5',
    700: '#b1e2d3',
    800: '#cbece2',
    900: '#e5f5f0',
  },
  moonstone: {
    DEFAULT: '#00b2ca',
    100: '#002429',
    200: '#004852',
    300: '#006c7a',
    400: '#0090a3',
    500: '#00b2ca',
    600: '#0ae2ff',
    700: '#47eaff',
    800: '#85f1ff',
    900: '#c2f8ff',
  },
  yinmn_blue: {
    DEFAULT: '#1d4e89',
    100: '#06101c',
    200: '#0c1f38',
    300: '#122f53',
    400: '#183f6f',
    500: '#1d4e89',
    600: '#296fc3',
    700: '#5692db',
    800: '#8eb6e7',
    900: '#c7dbf3',
  },
}

const fonts = {
  body: alegreya.style.fontFamily,
  heading: alegreya.style.fontFamily,
}

const theme = extendTheme({
  styles,
  config,
  colors,
  fonts,
})

export default theme
