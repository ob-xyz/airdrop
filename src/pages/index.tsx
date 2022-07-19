import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop - Big Homes for Digital Nomads</title>
        <meta name="description" content="Work remote. Stay anywhere. Book a modernly furnished condo that includes cleaning service, laundry service, WiFi,  and more. Book your airdrop today!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
            <h1>Big homes. Giant views. </h1>
            <h1>Many amenities.</h1>
        </div>
      </main>
    </div>
  )
}

export default Home