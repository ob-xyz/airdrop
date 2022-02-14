import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop | Drop topics you love.</title>
        <meta name="description" content="Start conversations about topics you love."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
          <div className={styles.text}>
            <h2>Drop topics you love 🖤</h2>
            <h4>Start conversations about topics you love.</h4>
            <h3>Launching 2022</h3>
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
