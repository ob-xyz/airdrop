import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop.is - Host Hybrid Events</title>
        <meta name="description" content="Airdrop is the ultimate event experience—online. Instantly stream company events that are fun for your online attendees."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.rainbowbox}>
            <h1>Airdrop.is</h1>
            <p>Reimagining events. Everywhere.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
