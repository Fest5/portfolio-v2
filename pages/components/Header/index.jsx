import React from 'react'

import styles from '../../../styles/components/Header.module.css'
import Navbar from './Navbar'


export default function Header({sections}) {
  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
        <div className={styles.logoContainer}>
            <p>sadasdsa</p>
        </div>
        <Navbar styles={styles} sections={sections}></Navbar>
          
        </nav>
    </header>
  )
}
