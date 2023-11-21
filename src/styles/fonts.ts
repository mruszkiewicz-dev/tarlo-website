import { Alegreya_Sans_SC } from 'next/font/google'
import localFont from 'next/font/local'

export const alegreya = Alegreya_Sans_SC({
  subsets: ['latin'],
  weight: ['500'],
})

export const myFont = localFont({
  src: '../../public/DryTransferFolio-Caps.ttf',
})
