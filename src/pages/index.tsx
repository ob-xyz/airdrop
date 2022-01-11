import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../shared/components/elements/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop</title>
        <meta name="description" content="airdrop.is" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
        <h2>A simple way to send crypto</h2>
        <div className={styles.batchimgs}>
          <div className={styles.img}>
          <Image
              src="/assets/img/crypto-logos/btc-logo.png"
              alt="bitcoin logo"
              width={75}
              height={75}
          />
          </div>
            <div className={styles.img}>
            <Image
              src="/assets/img/crypto-logos/eth-logo.png"
              alt="ethereum logo"
              width={75}
              height={75}
          />
            </div>
            <div className={styles.img}>
            <Image
              src="/assets/img/crypto-logos/ava-logo.png"
              alt="solana logo"
              width={75}
              height={75}
          />
            </div>
            <div className={styles.img}>
            <Image
              src="/assets/img/crypto-logos/yfi-logo.png"
              alt="avalanche logo"
              width={75}
              height={75}
          />
          </div>
            <div className={styles.img}>
            <Image
              src="/assets/img/crypto-logos/doge-logo.png"
              alt="yfi logo"
              width={75}
              height={90}
          />
            </div>
            <div className={styles.img}>
            <Image
              src="/assets/img/crypto-logos/sol-logo.png"
              alt="cordano logo"
              width={75}
              height={75}
          />
            </div>
            <div className={styles.img}>
            <Image
              src="/assets/img/crypto-logos/polygon-logo.png"
              alt="doge logo"
              width={75}
              height={75}
          />
            </div>
            <div className={styles.img}>
              <Image
                src="/assets/img/crypto-logos/cordano-logo.png"
                alt="polygon logo"
                width={75}
                height={75}
            />
            </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default Home
