import Head from 'next/head'
import React from 'react'

function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + '-Amazona' : 'Amazona'}</title>
        <meta name="description" content=" Amazona Next App" />
      </Head>
      <div>
        <header>
          header
        </header>
        <main>
          {children}
        </main>
        <footer>
          footer
        </footer>
      </div>
    </>
  )
}

export default Layout