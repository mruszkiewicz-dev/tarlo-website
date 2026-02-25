import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue,
  useColorMode,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
  Center,
  Portal,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Links } from '@/data/routes.js'
import { IconMoon, IconSun, IconMenu2 } from '@tabler/icons-react'
import { Logo } from './Logo'

interface Props {
  children: React.ReactNode
  href: string
}

const BurgerMenu = () => (
  <Menu id='navbar-menu' isLazy placement='bottom-start'>
    <MenuButton
      as={IconButton}
      aria-label='Otworz menu'
      icon={<IconMenu2 size={20} />}
      variant='ghost'
      size='md'
    />
    <Portal>
      <MenuList zIndex={1800} minW='180px'>
        {Links.map((item) => (
          <MenuItem as='a' href={item.link} key={item.link}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Portal>
  </Menu>
)

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
  const navBg = useColorModeValue('rgba(248, 250, 252, 0.9)', 'rgba(15, 16, 20, 0.9)')
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300')

  return (
    <Box
      as='header'
      bg={navBg}
      backdropFilter='saturate(180%) blur(8px)'
      borderBottom='1px solid'
      borderColor={borderColor}
      px={2}
      position='sticky'
      top='0'
      width='100%'
      overflow='visible'
      zIndex={1000}
    >
      <Flex
        h={16}
        alignItems='center'
        justifyContent='space-between'
        mx={{ base: 4, md: 20 }}
      >
        <Center
          m={1}
          w='48px'
          rounded='md'
          p={2}
          display={{ base: 'flex', md: 'none' }}
          _hover={{
            bg: useColorModeValue('gray.200', 'gray.700'),
            color: useColorModeValue('gray.700', 'gray.200'),
          }}
        >
          <BurgerMenu />
        </Center>
        <Center>
          <Link href='/'>
            <Logo w={80} h={80} />
          </Link>
        </Center>
        <HStack alignItems='center' display={{ base: 'none', md: 'flex' }}>
          <HStack as={'nav'} spacing={6}>
            {Links.map((item) => (
              <NavLink href={item.link} key={item.link}>
                {item.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Button
          onClick={toggleColorMode}
          aria-label='Przelacz motyw'
          bg={useColorModeValue('gray.700', 'gray.200')}
          color={useColorModeValue('gray.200', 'gray.700')}
          _hover={{
            bg: useColorModeValue('gray.200', 'gray.700'),
            color: useColorModeValue('gray.700', 'gray.200'),
          }}
        >
          {colorMode === 'light' ? <IconMoon /> : <IconSun />}
        </Button>
      </Flex>
    </Box>
  )
}
