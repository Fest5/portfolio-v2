import React from 'react'
import Link from 'next/link'

export default function Navbar({styles, sections}) {
  return (
    <div className={styles.sectionListContainer}>
        <ol className={styles.navOl}>
            {sections.map((section, index) => (
                <li style={{animationDelay: ` ${(100 * index)}ms`}} className={styles.navLi} key={section}>
                    <Link href={'/'}><span className={styles.counter}>0{index + 1}</span>{section}</Link>
                </li>
            ))}
        </ol>
        <div style={{animationDelay: '500ms'}} className={styles.resume}>Resume</div>
    </div>
  )
}
