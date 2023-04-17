import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <link rel="stylesheet" href={inter} />
      <Image src="/images/profile.jpg" width={144} height={144} />

    </div>
  )
}
