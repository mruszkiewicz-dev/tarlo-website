import fs from 'fs'
import path from 'path'

export type Concert = {
  place: string
  name: string
  date: string
  link: string
  dateISO?: string
}

type GoogleCalendarEvent = {
  status?: string
  summary?: string
  location?: string
  htmlLink?: string
  description?: string
  start?: {
    date?: string
    dateTime?: string
  }
}

type GoogleCalendarResponse = {
  items?: GoogleCalendarEvent[]
}

const FALLBACK_CONCERTS_PATH = path.join(process.cwd(), 'public', 'concerts.json')
const DEFAULT_TIMEZONE = process.env.GOOGLE_CALENDAR_TIMEZONE || 'Europe/Warsaw'

function formatDateOnly(dateString: string) {
  const [year, month, day] = dateString.split('-')
  if (!year || !month || !day) {
    return dateString
  }

  return `${day}.${month}.${year}`
}

function formatDateTime(dateTimeString: string, timezone: string) {
  const parsed = new Date(dateTimeString)
  if (Number.isNaN(parsed.getTime())) {
    return dateTimeString
  }

  return new Intl.DateTimeFormat('pl-PL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: timezone,
  }).format(parsed)
}

function extractExternalLinkFromDescription(description?: string) {
  if (!description) {
    return null
  }

  const httpMatch = description.match(/https?:\/\/[^\s<>"'()]+/i)
  if (httpMatch?.[0]) {
    return httpMatch[0]
  }

  const wwwMatch = description.match(/www\.[^\s<>"'()]+/i)
  if (wwwMatch?.[0]) {
    return `https://${wwwMatch[0]}`
  }

  return null
}

function mapGoogleEventToConcert(event: GoogleCalendarEvent): Concert | null {
  if (event.status === 'cancelled') {
    return null
  }

  const start = event.start?.dateTime || event.start?.date
  if (!start) {
    return null
  }

  const isDateOnly = Boolean(event.start?.date && !event.start?.dateTime)

  const externalLink = extractExternalLinkFromDescription(event.description)

  return {
    place: (event.location || '').trim() || 'Do potwierdzenia',
    name: (event.summary || '').trim() || 'Koncert Tarlo',
    date: isDateOnly ? formatDateOnly(start) : formatDateTime(start, DEFAULT_TIMEZONE),
    link: externalLink || event.htmlLink || '',
    dateISO: start,
  }
}

function sortByStartDate(a: Concert, b: Concert) {
  const aDate = a.dateISO ? new Date(a.dateISO).getTime() : 0
  const bDate = b.dateISO ? new Date(b.dateISO).getTime() : 0
  return aDate - bDate
}

function readFallbackConcerts(): Concert[] {
  try {
    const data = fs.readFileSync(FALLBACK_CONCERTS_PATH, 'utf-8')
    const parsed = JSON.parse(data)
    return Array.isArray(parsed) ? (parsed as Concert[]) : []
  } catch (error) {
    console.error('Cannot read fallback concerts.json', error)
    return []
  }
}

async function readGoogleCalendarConcerts(): Promise<Concert[] | null> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID?.trim()
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY?.trim()

  if (!calendarId || !apiKey) {
    return null
  }

  const query = new URLSearchParams({
    key: apiKey,
    singleEvents: 'true',
    orderBy: 'startTime',
    timeMin: new Date().toISOString(),
    maxResults: '100',
  })

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${query.toString()}`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Google Calendar API error ${response.status}`)
    }

    const data = (await response.json()) as GoogleCalendarResponse
    const concerts = (data.items || [])
      .map(mapGoogleEventToConcert)
      .filter((item): item is Concert => item !== null)
      .sort(sortByStartDate)

    return concerts
  } catch (error) {
    console.error('Cannot read Google Calendar concerts', error)
    return null
  }
}

export async function getConcertsData() {
  const googleConcerts = await readGoogleCalendarConcerts()
  if (googleConcerts !== null) {
    return googleConcerts
  }

  return readFallbackConcerts()
}
