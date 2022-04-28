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
                      src="/assets/img/logo/airdrop-logo2.png"
                      alt="Picture of the author"
                      width={42.5}
                      height={37.5}
                    />
                    </a>
                </Link>
        </header>
  )
}

export default Header