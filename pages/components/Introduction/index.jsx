import React from 'react'
import Link from 'next/link'
 
import styles from '../../../styles/components/Introduction.module.css'
import { Button } from '@mui/material'


export default function Introduction({content}) {
  
  return (
    <section className={styles.introduction}>
      <div className={styles.title}>
        <h1>{content.subtitle}</h1>
      </div>
      <div className={styles.title}>
        <h2>{content.title}</h2>
      </div>
      <div className={styles.description}>
        <p> {content.description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button variant="outlined" color="success">{content.buttonText}</Button>

      </div>
        
        
    </section>
  )
}
