import React from 'react'
import styles from '../../../styles/components/SocialBar.module.css'

export default function SocialBar({media}) {
  return (
    <div className={styles.socialBar}>
        <ul className={styles.socialBarList}>
            {media.map((media, index) => <li key={index} className={styles.socialBarItems}><a href={media.link}>{media.logo}</a></li>)}
        </ul>
    </div>
  )
}
