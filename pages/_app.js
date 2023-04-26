// pages/_app.js
import { StoreProvider } from '@/utils/Store'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {


  return <SessionProvider session={session}>
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  </SessionProvider>

}

export default MyApp