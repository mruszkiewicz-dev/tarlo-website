import { Box, Text, Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { Links } from '@/data/route.js'

interface Props {
  children: React.ReactNode
  href: string
}

const NavLink = (props: Props) => {
  const { children, href } = props

  return (
    <Link key={href} href={href}>
      <Box
        px={2}
        py={1}
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
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'center'}>
        <Box>Logo</Box>
        <HStack spacing={8} alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((item) => (
              <NavLink href={item.link} key={item.link}>
                {item.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}
