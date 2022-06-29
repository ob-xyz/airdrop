import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop - Live a life of luxury</title>
        <meta name="description" content="Airdrop is a marketplace of cool Shopify brands, products, and trends."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
            <h1>Live a life of luxury</h1>
            <p>Discover cool brands that match your lifestyle</p>
        </div>
      </main>
    </div>
  )
}

export default Home