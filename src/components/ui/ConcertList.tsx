import React, { useState, useEffect } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Fade,
  Spinner,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'

interface Concert {
  place: string
  name: string
  date: string
  link: string
}

async function getData() {
  const res = await fetch('/api/concerts')
  if (!res.ok) {
    throw new Error('Błąd')
  }
  return res.json()
}

export const ConcertList = () => {
  const [data, setData] = useState<Concert[]>([])
  const [loading, setLoading] = useState(true) // Stan ładowania

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData()
        setData(result)
      } catch (error) {
        console.error('Wystąpił błąd:', error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {loading ? (
        <Spinner thickness='4px' size='xl' />
      ) : (
        <TableContainer>
          <Table variant='simple' size='lg'>
            <Fade in={!loading}>
              {data[0]?.place !== '' ? (
                <>
                  <TableCaption>
                    Infomację gdzie jeszcze zagramy wkrótce
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Miejsce</Th>
                      <Th display={{ base: 'none', md: 'table-cell' }}>
                        Nazwa
                      </Th>
                      <Th>Data</Th>
                      <Th>Link</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {data.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.place}</Td>
                        <Td display={{ base: 'none', md: 'table-cell' }}>
                          {item.name}
                        </Td>
                        <Td>{item.date}</Td>
                        <Td>
                          <Link href={item.link} isExternal>
                            <LinkIcon />
                          </Link>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </>
              ) : (
                <Text>Wkrótce podamy infomację gdzie zagramy!</Text>
              )}
            </Fade>
          </Table>
        </TableContainer>
      )}
    </>
  )
}
