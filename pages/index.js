import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Container } from '@mui/material';


import media from './data/media'
import content from './data/content'
import { Header, SocialBar, Introduction, About } from './components'
import { useEffect } from 'react';

export default function Home() {


  useEffect(() => {

    const animated = document.querySelectorAll('.animated')

    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if(entry.isIntersecting) {
            entry.target.classList.add('show')
          } else {
            entry.target.classList.remove('show')
          }
        })
      })
    
      
      animated.forEach((el) => observer.observe(el))
    }, 1000)
    
  }, [])

  return (
    <>
      <Head>
        <title>Felipe Stuart - Portfolio</title>
        <meta name="description" content="Felipe Stuart Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <Header sections={content.sections} />
        <SocialBar media={media}></SocialBar>
        <main className={styles.main}>
            <Introduction content={content.introduction}></Introduction>
            <About></About>
        </main>

        
      </div>
    </>
  )
}
