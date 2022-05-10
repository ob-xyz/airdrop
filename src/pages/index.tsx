import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop: Company Events, </title>
        <meta name="description" content="Airdrop is where companies host virtual events like rockstars. Broadcast trade shows, conferences, and company events — online."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.rainbowbox}>
            <h1>Host virtual events like a rockstar 🎸</h1>
            <p>Get Beta Access for $1,000</p>
            <p>📧 beta@airdrop.is</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
