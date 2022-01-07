import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/scss/Header.module.scss'

const Header: NextPage = () => {
  return (
        <header className={styles.header}>
            <Link href="/">
                <a className={styles.imglogo}>
                <Image
                    src="/assets/img/logo/airdrop-logoyellow.png"
                    alt="airdrop logo"
                    width={55}
                    height={65}
                />
                </a>
            </Link>
        </header>
  )
}

export default Header