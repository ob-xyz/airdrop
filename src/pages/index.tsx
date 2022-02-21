import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop</title>
        <meta name="description" content="Instantly raise money for your startup"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.text}>
            <h3>The Lifeblood of Founders</h3>
            <p>Inspired by Founders Fund, we believe founders are gods reinventing the world. And our tenacious work reflects this fact. If your startup has godlike growth, please consider raising your Series A on Airdrop.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
