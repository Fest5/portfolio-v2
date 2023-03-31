import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const sections = ['About', 'Experience', 'Work', 'Contact']
  return (
    <>
      <Head>
        <title>Felipe Stuart - Portfolio</title>
        <meta name="description" content="Felipe Stuart Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.logoContainer}>
              <p>sadasdsa</p>
            </div>
            <div className={styles.sectionListContainer}>
              <ol className={styles.navOl}>
              {sections.map((section, index) => (
                <li className={styles.navLi} key={section}><Link href={'/'}><span className={styles.counter}>0{index + 1}</span>{section}</Link></li>
              ))}
              </ol>
              <div className={styles.resume}>Resume</div>
            </div>
          
          </nav>
        </header>
        <div className={styles.socialBar}>
          <ul className={styles.socialBarList}>
            <li className={styles.socialBarItems}><a href='github'>gh</a></li>
            <li className={styles.socialBarItems}><a href='github'>gh</a></li>
            <li className={styles.socialBarItems}><a href='github'>gh</a></li>
            <li className={styles.socialBarItems}><a href='github'>gh</a></li>
          </ul>
        </div>
        
        
      </main>
    </>
  )
}
