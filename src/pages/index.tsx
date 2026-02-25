import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SeoHead } from '@/components/seo/SeoHead'
import { Box, Center, VStack, useColorModeValue } from '@chakra-ui/react'
import { Logo } from '@/components/ui/Logo'
import { MyText } from '@/components/ui/MyText'

const MotionBox = motion(Box)
const INTRO_STORAGE_KEY = 'tarlo_home_intro_played'

export default function Home() {
  const [isReady, setIsReady] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [canAnimateIntro, setCanAnimateIntro] = useState(false)
  const [targetOffset, setTargetOffset] = useState({ x: 0, y: 0 })
  const targetLogoRef = useRef<HTMLDivElement | null>(null)
  const introBg = useColorModeValue('#f8fafc', '#09090b')

  useLayoutEffect(() => {
    if (!isReady || !showIntro || typeof window === 'undefined' || !targetLogoRef.current) {
      return
    }

    const calculateTargetOffset = () => {
      if (!targetLogoRef.current) {
        return
      }

      const targetRect = targetLogoRef.current.getBoundingClientRect()
      const viewportCenterX = window.innerWidth / 2
      const viewportCenterY = window.innerHeight / 2

      setTargetOffset({
        x: targetRect.left + targetRect.width / 2 - viewportCenterX,
        y: targetRect.top + targetRect.height / 2 - viewportCenterY,
      })
    }

    calculateTargetOffset()
    window.requestAnimationFrame(() => setCanAnimateIntro(true))
    window.addEventListener('resize', calculateTargetOffset)

    return () => {
      window.removeEventListener('resize', calculateTargetOffset)
    }
  }, [isReady, showIntro])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const introPlayed = sessionStorage.getItem(INTRO_STORAGE_KEY) === '1'
    if (introPlayed) {
      setIsReady(true)
      return
    }

    setShowIntro(true)
    setIsReady(true)
    sessionStorage.setItem(INTRO_STORAGE_KEY, '1')
  }, [])

  useEffect(() => {
    if (!showIntro) {
      return
    }

    const timeout = window.setTimeout(() => {
      setShowIntro(false)
      setCanAnimateIntro(false)
    }, 1600)

    return () => window.clearTimeout(timeout)
  }, [showIntro])

  const showContent = isReady && !showIntro

  return (
    <>
      <SeoHead
        title='Tarlo - Oficjalna Strona Zespolu'
        description='Oficjalna strona zespolu Tarlo. Sprawdz koncerty, dyskografie, galerie i kontakt bookingowy.'
        path='/'
        keywords='Tarlo, zespol rockowy, koncerty, albumy, galeria, booking'
      />

      {!isReady ? (
        <Box position='fixed' inset={0} zIndex={1999} bg={introBg} />
      ) : null}

      <AnimatePresence initial={false}>
        {showIntro ? (
          <MotionBox
            position='fixed'
            inset={0}
            zIndex={2000}
            bg={introBg}
            w='100vw'
            h='100dvh'
            display='flex'
            alignItems='center'
            justifyContent='center'
            overflow='hidden'
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.28, ease: 'easeOut' } }}
          >
            <MotionBox
              initial={{ scale: 2.8, x: 0, y: 0 }}
              animate={
                canAnimateIntro
                  ? { scale: 1, x: targetOffset.x, y: targetOffset.y }
                  : { scale: 2.8, x: 0, y: 0 }
              }
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo h={300} w={400} />
            </MotionBox>
          </MotionBox>
        ) : null}
      </AnimatePresence>

      <Box
        minH='70vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
        px={4}
        opacity={showContent ? 1 : 0}
        transition='opacity 0.2s ease'
      >
        <VStack spacing={3}>
          <MyText>Oficjalna strona zespolu</MyText>
          <Center ref={targetLogoRef}>
            <Logo h={300} w={400} />
          </Center>
        </VStack>
      </Box>
    </>
  )
}
