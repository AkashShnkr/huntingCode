import React from 'react'
import Link from 'next/link'
import styles from "@/app/page.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <ul> 
     <Link href="/"><li>Home</li></Link> 
      <Link href="/blogpost/blog"><li>popular</li></Link>
      <Link href="/about"><li>about</li></Link>
      <Link href="/contact"><li>contact</li></Link>
    </ul>
    </div>
  )
}

export default Navbar
