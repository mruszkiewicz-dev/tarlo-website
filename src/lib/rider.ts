import fs from 'fs'
import path from 'path'

export type RiderPdfInfo = {
  absolutePath: string | null
  driveFileId: string | null
  fileName: string | null
  updatedAt: string | null
  source: 'configured' | 'public' | 'drive' | 'none'
}

type GoogleDriveFilesResponse = {
  files?: Array<{
    id: string
    name: string
    modifiedTime: string
  }>
}

type RiderCacheEntry = {
  value: RiderPdfInfo
  expiresAt: number
}

let riderCache: RiderCacheEntry | null = null

function getCacheTtlMs() {
  const rawSeconds = Number(process.env.RIDER_CACHE_TTL_SECONDS || '300')
  if (Number.isNaN(rawSeconds) || rawSeconds < 0) {
    return 300 * 1000
  }

  return rawSeconds * 1000
}

function toAbsolutePath(inputPath: string) {
  if (path.isAbsolute(inputPath)) {
    return inputPath
  }

  return path.join(process.cwd(), inputPath)
}

function isPdfFile(filePath: string) {
  return path.extname(filePath).toLowerCase() === '.pdf'
}

function getNewestPdfFromDirectory(directoryPath: string) {
  if (!fs.existsSync(directoryPath)) {
    return null
  }

  const files = fs
    .readdirSync(directoryPath)
    .map((fileName) => path.join(directoryPath, fileName))
    .filter((filePath) => fs.existsSync(filePath) && fs.statSync(filePath).isFile() && isPdfFile(filePath))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)

  return files[0] || null
}

function resolveConfiguredPdfPath() {
  const configuredPath = process.env.RIDER_PDF_PATH?.trim()
  if (!configuredPath) {
    return null
  }

  const absolutePath = toAbsolutePath(configuredPath)
  if (!fs.existsSync(absolutePath)) {
    return null
  }

  const stats = fs.statSync(absolutePath)
  if (stats.isDirectory()) {
    return getNewestPdfFromDirectory(absolutePath)
  }

  if (stats.isFile() && isPdfFile(absolutePath)) {
    return absolutePath
  }

  return null
}

function resolvePublicPdfPath() {
  const publicDir = path.join(process.cwd(), 'public')
  return getNewestPdfFromDirectory(publicDir)
}

function getGoogleDriveApiKey() {
  return process.env.GOOGLE_DRIVE_API_KEY?.trim() || process.env.GOOGLE_CALENDAR_API_KEY?.trim() || null
}

async function resolveDrivePdfFromFolder() {
  const folderId = process.env.RIDER_DRIVE_FOLDER_ID?.trim()
  const apiKey = getGoogleDriveApiKey()

  if (!folderId || !apiKey) {
    return null
  }

  const query = `'${folderId}' in parents and trashed=false and mimeType='application/pdf'`
  const params = new URLSearchParams({
    key: apiKey,
    q: query,
    pageSize: '1',
    orderBy: 'modifiedTime desc',
    fields: 'files(id,name,modifiedTime)',
    includeItemsFromAllDrives: 'true',
    supportsAllDrives: 'true',
  })

  const url = `https://www.googleapis.com/drive/v3/files?${params.toString()}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Google Drive API error ${response.status}`)
    }

    const data = (await response.json()) as GoogleDriveFilesResponse
    const newestFile = data.files?.[0]
    if (!newestFile) {
      return null
    }

    return newestFile
  } catch (error) {
    console.error('Cannot read Google Drive rider folder', error)
    return null
  }
}

export function getRiderDriveApiKey() {
  return getGoogleDriveApiKey()
}

export async function getRiderPdfInfo(): Promise<RiderPdfInfo> {
  const now = Date.now()
  if (riderCache && riderCache.expiresAt > now) {
    return riderCache.value
  }

  const drivePdf = await resolveDrivePdfFromFolder()
  if (drivePdf) {
    const value: RiderPdfInfo = {
      absolutePath: null,
      driveFileId: drivePdf.id,
      fileName: drivePdf.name,
      updatedAt: drivePdf.modifiedTime || null,
      source: 'drive',
    }
    riderCache = { value, expiresAt: now + getCacheTtlMs() }
    return value
  }

  const configuredPdfPath = resolveConfiguredPdfPath()
  if (configuredPdfPath && fs.existsSync(configuredPdfPath)) {
    const stats = fs.statSync(configuredPdfPath)
    const value: RiderPdfInfo = {
      absolutePath: configuredPdfPath,
      driveFileId: null,
      fileName: path.basename(configuredPdfPath),
      updatedAt: stats.mtime.toISOString(),
      source: 'configured',
    }
    riderCache = { value, expiresAt: now + getCacheTtlMs() }
    return value
  }

  const publicPdfPath = resolvePublicPdfPath()
  if (publicPdfPath && fs.existsSync(publicPdfPath)) {
    const stats = fs.statSync(publicPdfPath)
    const value: RiderPdfInfo = {
      absolutePath: publicPdfPath,
      driveFileId: null,
      fileName: path.basename(publicPdfPath),
      updatedAt: stats.mtime.toISOString(),
      source: 'public',
    }
    riderCache = { value, expiresAt: now + getCacheTtlMs() }
    return value
  }

  const value: RiderPdfInfo = {
    absolutePath: null,
    driveFileId: null,
    fileName: null,
    updatedAt: null,
    source: 'none',
  }
  riderCache = { value, expiresAt: now + getCacheTtlMs() }
  return value
}
