import Navbar from '@/src/components/navbar'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return( 
    <>
    <Head>
        <title>Portifolio Next</title>
      </Head>
    <Navbar />
  <Component {...pageProps} />
  </>)
}
