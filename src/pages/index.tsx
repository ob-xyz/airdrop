import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../shared/components/elements/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>airdrop</title>
        <meta name="description" content="airdrop.is" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
            <h1>airdrop</h1>
        </div>
      </main>
    </div>
  )
}

export default Home