import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Airdrop - Live a life of luxury</title>
        <meta name="description" content="Airdrop is where the remote work revolution begins. Live in fully furnished condo with hotel amenities. Book your airdrop today!"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
            <h1>Live a life of luxury</h1>
            <p>Fully furnished condos with hotel amenities</p>
        </div>
      </main>
    </div>
  )
}

export default Home