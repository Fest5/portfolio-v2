import Head from 'next/head'
import styles from '@/styles/Home.module.css'


import media from './data/media'
import content from './data/content'
import { Header, SocialBar, Introduction, About, Preloader } from './components'
import { useEffect, useState } from 'react';

export default function Home() {

  const [preloadStatus, setPreloadStatus] = useState(false)

  console.log(preloadStatus)

  useEffect(() => {

    const animated = document.querySelectorAll('.animated')

    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if(entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      })
    
      
      animated.forEach((el) => observer.observe(el))
    }, 5500)
    
  }, [])

  useEffect(() => {
    let prevScrollPos = window.scrollY
    let currentScrollPos;

    window.addEventListener("scroll", () => {
      currentScrollPos = window.scrollY

      if (prevScrollPos > currentScrollPos) {
        document.querySelector("header").classList.remove("slide-up");
      } else {
        document.querySelector("header").classList.add("slide-up");
      }

      prevScrollPos = currentScrollPos;
    });

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
        <Preloader setPreloadStatus={setPreloadStatus} ></Preloader>
        <Header preloadStatus={preloadStatus} sections={content.sections} />
        <SocialBar media={media}></SocialBar>
        <main className={styles.main}>
            <Introduction content={content.introduction}></Introduction>
            <About content={content.about}></About>
        </main>

        
      </div>
    </>
  )
}
