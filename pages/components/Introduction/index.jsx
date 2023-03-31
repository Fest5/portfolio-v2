import React from 'react'
import Link from 'next/link'

import styles from '../../../styles/components/Introduction.module.css'
import { Button } from '@mui/material'


export default function Header({sections}) {
  return (
    <section className={styles.introduction}>
      <div>
        <h1>Felipe Stuart</h1>
      </div>
      <div>
        <h2>hago software</h2>
      </div>
      <div>
        <p> soy lindo</p>
      </div>
      <div>
        <Button>ok</Button>

      </div>
        
        
    </section>
  )
}
