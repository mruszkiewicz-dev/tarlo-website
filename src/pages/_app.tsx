// pages/_app.tsx
import type { AppProps } from 'next/app'
import Main from '@/components/layouts/main'
import '@/styles/globals.css'

// Define the main app component
function MyApp({ Component, pageProps }: AppProps) {
  // Use the Main layout component to wrap the main content
  return (
    <Main>
      {/* Render the main component passed in as a prop */}
      <Component {...pageProps} />
    </Main>
  )
}

// Export the app component as the default export
export default MyApp
