import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>airdrop</title>
        <meta name="description" content="Host virtual events like a rockstar 🎸"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.text}>
            <h1>Host virtual events like a rockstar 🎸</h1>
            <p>{"🎤 Grab the Mic"}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
