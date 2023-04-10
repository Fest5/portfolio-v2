import React from 'react'
import Link from 'next/link'
 
import styles from '../../../styles/components/Introduction.module.css'
import { Button } from '@mui/material'


export default function Introduction({content}) {
  
  return (
    <section className={styles.introduction}>
      <div className={`${styles.title} animated hidden`}>
        <h1>{content.subtitle}</h1>
      </div>
      <div className={`${styles.title} animated hidden`}>
        <h2>{content.title}</h2>
      </div>
      <div className={`${styles.description} animated hidden`}>
        <p> {content.description}</p>
      </div>
      <div className={`${styles.buttonContainer} animated hidden`}>
        <Button variant="outlined" color="success">{content.buttonText}</Button>

      </div>
        
        
    </section>
  )
}
