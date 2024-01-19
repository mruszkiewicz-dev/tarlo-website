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
  Center,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Links } from '@/data/routes.js'
import { IconMoon, IconSun, IconMenu2 } from '@tabler/icons-react'
import { Logo } from './logo'

interface Props {
  children: React.ReactNode
  href: string
}

const BurgerMenu = () => (
  <Menu id='navbar-menu'>
    <MenuButton>
      <IconMenu2 />
    </MenuButton>
    <MenuList zIndex='99999'>
      {Links.map((item) => (
        <MenuItem as='a' href={item.link} key={item.link} zIndex='99999'>
          {item.name}
        </MenuItem>
      ))}
    </MenuList>
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

  return (
    <Box
      bg={useColorModeValue('gray.200', 'gray.900')}
      px={2}
      top='0'
      width='100%'
      overflow='hidden'
      zIndex={99}
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
          <Logo w={80} h={80} />
        </Center>
        <HStack alignItems='center' display={{ base: 'none', md: 'flex' }}>
          <HStack as={'nav'} spacing={8}>
            {Links.map((item) => (
              <NavLink href={item.link} key={item.link}>
                {item.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Button
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
      </Flex>
    </Box>
  )
}
