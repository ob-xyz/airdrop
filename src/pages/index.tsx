import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>airdrop</title>
        <meta name="description" content="Get money for your startup"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.text}>
            <h3>Lifeblood for Founders</h3>
            <p>Inspired by Founders Fund, we believe founders are like gods reinventing the world. But they can't grow an amazing team or build cool products without capital.</p>
            <p>Our goal is to instantly airdrop capital to founders reinventing the world. We do it by partnering with the best capital allocators and building software that works. If your startup is growing like a weed, please consider raising your Series A on airdrop.</p>
            <p>Contact chris@airdrop.is</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
