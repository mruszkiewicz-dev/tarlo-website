'use client'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { LinkIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData()
        setData(result)
      } catch (error) {
        console.error('Wystąpił błąd:')
      }
    }

    fetchData()
  }, [])

  return (
    <TableContainer>
      <Table variant='simple' size='lg'>
        <TableCaption>Infomację gdzie jeszcze zagramy wkrótce</TableCaption>
        <Thead>
          <Tr>
            <Th>Miejsce</Th>
            <Th>Nazwa</Th>
            <Th>Data</Th>
            <Th>Link</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((item) => (
            <Tr key={item.name}>
              <Td>{item.place}</Td>
              <Td>{item.name}</Td>
              <Td>{item.date}</Td>
              <Td>
                <Link href={item.link} isExternal>
                  <LinkIcon />
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
