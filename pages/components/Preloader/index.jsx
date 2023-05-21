import React, { useRef } from 'react'
import { useEffect } from 'react';

import styles from '../../../styles/components/Preloader.module.css'


export default function Preloader({setPreloadStatus}) {

    const myRef = useRef();

    useEffect(() => {

        setTimeout(() => {
            myRef.current.classList.add(styles.delay2s)
            setPreloadStatus(true)
        }, 5000)
    
    }, [setPreloadStatus])

  return (
    <div id={styles.preloaderContainer} ref={myRef}>
        <div className={styles.preloader}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
