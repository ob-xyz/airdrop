import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop.is - The Best Sports Betting Platform</title>
        <meta name="description" content="Airdrop is the ultimate sports betting experience. Use Apple Pay, Google Pay and more to deposit bitcoin and place your bet."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.rainbowbox}>
            <h1>Airdrop</h1>
            <p>Bet on what you know, and love.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
