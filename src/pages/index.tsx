import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop | Where wordchads converse 🗣</title>
        <meta name="description" content="Where wordchads discuss trending topics."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.text}>
            <h2>Where wordchads converse 🗣</h2>
            <h3>What started as an internet meme is now a 
                growing community of wordchads</h3>
          </div>
        <div className={styles.batchimgs}>
          <div className={styles.img}>
          <Image
              src="/assets/img/home/social.webp"
              alt="social eggs"
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
