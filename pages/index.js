import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import media from './data/media'
import { Header, SocialBar, Introduction, About } from './components'

export default function Home() {

  const sections = ['About', 'Experience', 'Work', 'Contact']

  console.log(media)
  
  return (
    <>
      <Head>
        <title>Felipe Stuart - Portfolio</title>
        <meta name="description" content="Felipe Stuart Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <Header sections={sections} />
        <SocialBar media={media}></SocialBar>
        <main className={styles.main}>
            <Introduction></Introduction>
            <About></About>
        </main>

        
      </div>
    </>
  )
}
