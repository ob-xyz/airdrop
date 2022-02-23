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
              <p>Successful founders do three things right — they make a great product, hire an amazing team, and set the vision. But the best founders? They use every ounce of capital available to bet on themselves. And sometimes they win big.</p>
              <p>Our goal is to airdrop capital to founders reinventing the world. We do it by partnering with long-term capital allocators and making software that works.</p>
              <p>If your startup is growing like a weed, please consider raising your Series A on airdrop. You can reach us by email at chris@airdrop.is</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
