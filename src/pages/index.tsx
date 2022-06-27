import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop - Live your best lifestyle</title>
        <meta name="description" content="Shop quality Shopify brands tailored to your lifestyle."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
            <h1>Live your best lifestyle</h1>
            <p>Shop high quality Shopify brands.</p>
        </div>
      </main>
    </div>
  )
}

export default Home
