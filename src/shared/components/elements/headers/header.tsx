import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../../styles/shared/components/elements/headers/Header.module.scss'

const Header: NextPage = () => {
  return (
        <header className={styles.header}>
                <Link href="/">
                    <a className={styles.subheader}>
                    <Image
                      src="/assets/img/logo/airdrop-logo.png"
                      alt="Picture of the author"
                      width={40}
                      height={30}
                    />
                    </a>
                </Link>
        </header>
  )
}

export default Header