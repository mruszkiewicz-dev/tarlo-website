import { Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'

export const alegreya = Space_Grotesk({ subsets: ['latin'] })

export const myFont = localFont({
  src: '../../public/DryTransferFolio-Caps.otf',
})
