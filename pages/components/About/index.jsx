import React from 'react'
import Link from 'next/link'

import styles from '../../../styles/components/About.module.css'
import { Button } from '@mui/material'


export default function About() {
  return (
    <section className={styles.introduction}>
      <div className={styles.title}>
        <h1>Felipe Stuart</h1>
      </div>
      <div className={styles.title}>
        <h2>Software Engineer and Frontend Developer</h2>
      </div>
      <div className={styles.description}>
        <p> I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Mercado Pago.</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="outlined" color="success">ok</Button>

      </div>
        
        
    </section>
  )
}
