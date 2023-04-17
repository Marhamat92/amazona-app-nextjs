import React from 'react'

function Layout({ children }) {
  return (
    <>
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