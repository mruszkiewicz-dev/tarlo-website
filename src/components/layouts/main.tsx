import React, { ReactNode } from 'react'
import Head from 'next/head'

type MainProps = {
  children: ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Tarło - Oficjalna strona zespołu' />
        <meta name='author' content='Michał Ruszkiewicz' />
        <meta name='author' content='mruszkiewicz.dev' />
        <title>Tarło</title>
      </Head>
      {children}
    </div>
  )
}

export default Main
