import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Links } from '@/data/routes.js'
import { IconMoon, IconSun } from '@tabler/icons-react'

interface Props {
  children: React.ReactNode
  href: string
}

const NavLink = (props: Props) => {
  const { children, href } = props

  return (
    <Link key={href} href={href}>
      <Box
        px={3}
        py={1}
        fontSize={{ base: 'md', md: '2xl' }}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
      >
        {children}
      </Box>
    </Link>
  )
}

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.900')}
      px={4}
      top='0'
      position='fixed'
      width='100%'
      overflow='hidden'
      zIndex={99}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'center'}>
        <Box>Logo</Box>
        <HStack spacing={8} alignItems={'center'}>
          <HStack as={'nav'} spacing={8} display={{ base: 'none', md: 'flex' }}>
            {Links.map((item) => (
              <NavLink href={item.link} key={item.link}>
                {item.name}
              </NavLink>
            ))}
          </HStack>
          <Button
            my={4}
            onClick={toggleColorMode}
            bg={useColorModeValue('gray.700', 'gray.200')}
            color={useColorModeValue('gray.200', 'gray.700')}
            _hover={{
              bg: useColorModeValue('gray.200', 'gray.700'),
              color: useColorModeValue('gray.700', 'gray.200'),
            }}
          >
            {colorMode === 'light' ? <IconMoon /> : <IconSun />}
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}
