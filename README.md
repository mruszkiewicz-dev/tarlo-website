This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Data Automation

You can automate concerts and rider data using environment variables.

### Concerts from Google Calendar

Set these variables:

```bash
GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
GOOGLE_CALENDAR_API_KEY=your-google-api-key
GOOGLE_CALENDAR_TIMEZONE=Europe/Warsaw
```

When set, `/concerts` and `/api/concerts` read upcoming events from Google Calendar.
If variables are missing or API fails, app falls back to `public/concerts.json`.

### Rider PDF from disk

Set:

```bash
RIDER_PDF_PATH=/absolute/path/to/rider.pdf
```

or point to a directory:

```bash
RIDER_PDF_PATH=/absolute/path/to/rider-folder
```

If a directory is provided, the newest `.pdf` file is served.
The page uses `/api/rider-pdf`, so replacing the file on disk updates the served rider automatically.

If app runs in WSL and file is on Windows disk, use a WSL path like:

```bash
RIDER_PDF_PATH=/mnt/c/Users/your-user/Documents/tarlo-rider
```

### Rider PDF from Google Drive folder (auto newest file)

Set:

```bash
RIDER_DRIVE_FOLDER_ID=your-google-drive-folder-id
GOOGLE_DRIVE_API_KEY=your-google-drive-api-key
```

Then app picks the newest `.pdf` from that folder automatically.
`/rider` and `/api/rider-pdf` use this source first.

Setup requirements:

1. Enable Google Drive API in Google Cloud project.
2. Create API key.
3. Share Drive folder so files are accessible by link/API.
4. Put rider PDFs into that folder (newest `modifiedTime` wins).

Source priority:

1. Google Drive folder (`RIDER_DRIVE_FOLDER_ID`)
2. Local disk (`RIDER_PDF_PATH`)
3. `public/` fallback
