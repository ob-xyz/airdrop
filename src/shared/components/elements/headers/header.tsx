import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../../../styles/shared/components/elements/headers/Header.module.scss'

const Header: NextPage = () => {
  return (
        <header className={styles.header}>
                <Link href="/">
                    <a className={styles.subheader}>
                    <h1>airdrop_</h1>
                    </a>
                </Link>
        </header>
  )
}

export default Header