import type { Metadata } from 'next'
import './globals.css'
import { alegreya } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: 'Tarło - Oficjalna Strona Zespołu',
  description: 'Tarło - Oficjalna Strona Zespołu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pl'>
      <body className={`${alegreya.className} antialiased`}>
        <>{children}</>
      </body>
    </html>
  )
}
