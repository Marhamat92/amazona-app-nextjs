// pages/_app.js
import { StoreProvider } from '@/utils/Store'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {


  return <StoreProvider><Component {...pageProps} /></StoreProvider>

}

export default MyApp