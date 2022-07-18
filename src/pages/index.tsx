import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop - Here to stay</title>
        <meta name="description" content="Work remote. Stay anywhere. Every airdrop is fully furnished and includes hotel amenities like daily cleaning, laundry service, and more. Book your airdrop today!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
            <h1>Here to stay</h1>
            <p>Book a fully furnished condo with hotel amenities.</p>
        </div>
      </main>
    </div>
  )
}

export default Home