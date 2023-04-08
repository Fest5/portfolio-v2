import React from 'react'
import styles from '../../../styles/components/SocialBar.module.css'

import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function SocialBar({media}) {
  const icons = {
    LinkedIn: LinkedInIcon,
    GitHub: GitHubIcon,
    Instagram: InstagramIcon,
    Twitter: TwitterIcon
  }

  const createComponent = (el) => {
    const SpecificIcon = icons[el.name]
    return <SpecificIcon />
  }
  return (
    <div className={styles.socialBar}>
        <ul className={styles.socialBarList}>
            {media.map((el, index) => <li key={index} className={styles.socialBarItems}><IconButton href={el.link} color='primary'>{createComponent(el)}</IconButton></li>)}
        </ul>
    </div>
  )
}
