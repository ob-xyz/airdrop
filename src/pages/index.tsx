import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop | Home</title>
        <meta name="description" content="Where writers live."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.text}>
            <h2>Where writers live</h2>
            <h4>Create a newsletter today.</h4>
            <h3>Launching 2022</h3>
          </div>
        <div className={styles.batchimgs}>
          <div className={styles.img}>
          <Image
              src="/assets/img/home/walking-bg.jpg"
              alt="entrepreneurs walking"
              width={1000}
              height={700}
              priority={true}
          />
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Home
