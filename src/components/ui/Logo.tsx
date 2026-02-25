import { useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'

interface LogoP {
  w: number
  h: number
}

export const Logo = ({ w, h }: LogoP) => {
  const imageFilter = useColorModeValue('invert(1)', 'none')

  return (
    <Image src='/logo.svg' alt='Logo zespolu Tarlo' width={w} height={h} style={{ filter: imageFilter }} />
  )
}

