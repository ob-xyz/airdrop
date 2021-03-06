import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../../styles/shared/components/elements/headers/Header.module.scss'

const Header: NextPage = () => {
  return (
        <header className={styles.header}>
                <Link href="/">
                    <a className={styles.subheader}>
                    <h1>A I R D R O P</h1>
                    </a>
                </Link>
        </header>
  )
}
 
export default Header