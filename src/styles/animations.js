import { keyframes } from '@chakra-ui/react'

export const rotateVertCenter = keyframes`
    0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}
 `
