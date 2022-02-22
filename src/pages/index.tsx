import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>airdrop</title>
        <meta name="description" content="Instantly get funding for your startup from investors like a16z, Founders Fund, Tiger Global, Social Capital, Coatue, & more!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.text}>
            <h3>Lifeblood for Founders</h3>
            <p>Inspired by Founders Fund, we believe founders are like gods reinventing the world.</p>
            <p>Successful founders get three things right — they make a great product, hire an amazing team, and set the vision. But the best founders? They use every ounce of capital available to constantly perfect their business.</p>
            <p>Our goal is to instantly airdrop capital to founders reinventing the world. And we do it by partnering with capital allocators and making software that works. If your startup is growing like a weed, please consider raising your Series A on airdrop.</p>
            <p>Contact chris@airdrop.is or reach by dm.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
