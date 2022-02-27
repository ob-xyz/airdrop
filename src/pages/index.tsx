import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>airdrop</title>
        <meta name="description" content="Airdrop is where founders bet on themselves — start raising your Series A round today!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.text}>
            <p>{"We airdrop capital to founders."}</p>
            <p>{"That's it. That's the company."}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
