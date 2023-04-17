import React from 'react'

function Layout({ children }) {
  return (
    <>
      <header>
        header
      </header>
      <main>
        {children}
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}

export default Layout