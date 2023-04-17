import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Layout from '../components/Layout'






export default function Home() {
  return (
    <Layout title="Homepage">
      <div className='bg-red-500 py-80'>
        <h1 className="text-4xl font-bold">Homepage</h1>
      </div>
    </Layout>
  )
}
