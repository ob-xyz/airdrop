import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop® | Host virtual events like a rockstar</title>
        <meta name="description" content="Instantly stream your company trade show, conference, summit, presentation, or event."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.rainbowbox}>
            <h1>airdrop</h1>
            <p>Reimagining events. Everywhere.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
