import React from 'react';

import styled from "@/app/page.module.css"
import Link from 'next/link'
const page = () => {
  return (
    <><div className={styled.blogheader}>
    <h2>Popular Blogs</h2>
    <div className={styled.blogs}>
      <Link href="/blogpost/blog/javascript">
      <h3>How to learn JavaScript in 2022?</h3> 
      <p>JavaScript is the language used to design logic for the web</p>
      </Link>
    </div>
    <div className={styled.blogs}>
      <Link href="/blogpost/blog/javascript1">
      <h3>How to learn JavaScript in 2022?</h3> 
      <p>JavaScript is the language used to design logic for the web</p>
      </Link>
    </div>
    <div className={styled.blogs}>
      <Link href="/blogpost/blog/">
      <h3>How to learn JavaScript in 2022?</h3> 
      <p>JavaScript is the language used to design logic for the web</p>
      </Link>
    </div>
  </div></>
  )
}

export default page
