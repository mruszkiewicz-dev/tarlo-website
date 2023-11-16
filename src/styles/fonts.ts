import { Agbalumo } from 'next/font/google'
import localFont from 'next/font/local'

export const alegreya = Agbalumo({ subsets: ['latin'], weight: ['400'] })

export const myFont = localFont({
  src: '../../public/DryTransferFolio-Caps.otf',
})
