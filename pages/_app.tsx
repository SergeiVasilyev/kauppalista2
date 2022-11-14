import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import Layout from '../components/layout'
import Layout from '@/components/layout'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Kauppalista</title>
        <meta />
      </Head>
      <Component {...pageProps} />
    </Layout> 
  )
}
