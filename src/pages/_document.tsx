// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document'
import { alegreya } from '@/styles/fonts'

export default function Document() {
  return (
    <Html lang='pl'>
      <Head />
      <body className={`${alegreya.className} antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
