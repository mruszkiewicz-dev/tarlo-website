import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <p>aa</p>
      <Component {...pageProps} />
    </>
  )
}
