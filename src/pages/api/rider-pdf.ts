import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getRiderDriveApiKey, getRiderPdfInfo } from '@/lib/rider'

function setPdfHeaders(res: NextApiResponse, fileName: string) {
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader(
    'Content-Disposition',
    `inline; filename="rider.pdf"; filename*=UTF-8''${encodeURIComponent(fileName)}`,
  )
}

async function sendGoogleDrivePdf(res: NextApiResponse, fileId: string, fileName: string) {
  const apiKey = getRiderDriveApiKey()
  if (!apiKey) {
    throw new Error('Missing Google Drive API key')
  }

  const url = `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media&key=${encodeURIComponent(apiKey)}&supportsAllDrives=true`
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Google Drive download error ${response.status}`)
  }

  const content = Buffer.from(await response.arrayBuffer())
  setPdfHeaders(res, fileName)
  res.status(200).send(content)
}

function sendLocalPdf(res: NextApiResponse, absolutePath: string, fileName: string) {
  setPdfHeaders(res, fileName)

  const fileStream = fs.createReadStream(absolutePath)
  fileStream.on('error', () => {
    if (!res.headersSent) {
      res.status(500).end('Cannot open rider file')
      return
    }

    res.end()
  })

  fileStream.pipe(res)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rider = await getRiderPdfInfo()

  if (!rider.fileName) {
    res.status(404).json({ error: 'Rider PDF not found' })
    return
  }

  try {
    if (rider.source === 'drive' && rider.driveFileId) {
      await sendGoogleDrivePdf(res, rider.driveFileId, rider.fileName)
      return
    }

    if (rider.absolutePath) {
      sendLocalPdf(res, rider.absolutePath, rider.fileName)
      return
    }

    res.status(404).json({ error: 'Rider PDF not found' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

