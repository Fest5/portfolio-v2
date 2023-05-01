import React, { useRef } from 'react'
import { useEffect } from 'react';

import styles from '../../../styles/components/Preloader.module.css'


export default function Preloader() {

    const myRef = useRef();

    useEffect(() => {

        setTimeout(() => {
            myRef.current.classList.add(styles.delay2s)
        }, 5000)
    
    }, [])

  return (
    <div id={styles.preloaderContainer} ref={myRef}>
        <div className={styles.preloader}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
