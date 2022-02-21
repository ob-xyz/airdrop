import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop</title>
        <meta name="description" content="Where founders raise capital."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.text}>
            <h2>Meet the best investors</h2>
            <h3>Raise your Series A</h3>
          </div>
        <div className={styles.batchimgs}>
          <div className={styles.img}>
          <video autoPlay loop muted>
              <source src='/assets/vid/vid.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Home
