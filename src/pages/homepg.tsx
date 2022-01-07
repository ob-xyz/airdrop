import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/header'
import styles from '../styles/scss/Homepg.module.scss'

const Homepg: NextPage = () => {
  return (
    <div>
      <Head>
        <title>mirin</title>
        <meta name="description" content="mirin.xyz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s2}>
            <h1>test</h1>
        </div>
      </main>
    </div>
  )
}

export default Homepg
