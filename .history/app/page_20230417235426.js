import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>My page</title>

      </Head>
      <h1>
        Hello World
      </h1>
    </div>
  )
}
