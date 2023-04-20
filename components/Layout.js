import { Store } from '@/utils/Store'
import Head from 'next/head'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'


function Layout({ children, title }) {

  const { state, dispatch } = useContext(Store)
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0)

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))
  }, [cart.cartItems])

  return (
    <>
      <Head>
        <title>{title ? title + '-Amazona' : 'Amazona'}</title>
        <meta name="description" content=" Amazona Next App" />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header>
          <nav className='flex h-12 justify-between shadow-md px-4 items-center'>
            <Link href="/" >
              <p className='text-xl font-bold'>amazona</p>
            </Link>
            <div className='flex space-x-3'>
              <Link href="/cart">
                <p href='#'>Cart
                  {cartItemsCount > 0 && (
                    <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                      {cartItemsCount}
                    </span>
                  )
                  }
                </p>
              </Link>
              <Link href="/signin">
                <p >Sign In</p>
              </Link>
            </div>
          </nav>
        </header>
        <main className=' container m-auto mt-4 px-4'>
          {children}
        </main>
        <footer className='flex justify-center items-center shadow-inner h-12'>
          <p className='text-black' >Copyright &copy; {new Date().getFullYear()} Amazona</p>
        </footer>
      </div>
    </>
  )
}

export default Layout