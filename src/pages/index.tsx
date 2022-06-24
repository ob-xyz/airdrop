import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Brands That Match Your Lifestyle | Airdrop</title>
        <meta name="description" content="Discover brands that match your lifestyle. Tesla Cars. Peloton Bikes. SHEIN Clothes. And MORE!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.rainbowbox}>
            <h1>Brands that match your lifestyle</h1>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
