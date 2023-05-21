import React from 'react'

import styles from '../../../styles/components/Header.module.css'
import Navbar from './Navbar'


export default function Header({sections, preloadStatus}) {
  return (
    preloadStatus && (<header className={styles.header}>
        <nav className={`${styles.nav} animated`}>
          <div className={styles.logoContainer}>
              <p>Logo</p>
          </div>
          <Navbar styles={styles} sections={sections}></Navbar>
          
        </nav>
    </header>)
  )
}
