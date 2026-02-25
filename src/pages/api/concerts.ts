import type { NextApiRequest, NextApiResponse } from 'next'
import { getConcertsData } from '@/lib/concerts'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const concerts = await getConcertsData()
    res.status(200).json(concerts)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

