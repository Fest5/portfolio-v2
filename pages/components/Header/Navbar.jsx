import React from 'react'
import Link from 'next/link'

export default function Navbar({styles, sections}) {
  return (
    <div className={styles.sectionListContainer}>
        <ol className={styles.navOl}>
            {sections.map((section, index) => (
                <li className={styles.navLi} key={section}>
                    <Link href={'/'}><span className={styles.counter}>0{index + 1}</span>{section}</Link>
                </li>
            ))}
        </ol>
        <div className={styles.resume}>Resume</div>
    </div>
  )
}
