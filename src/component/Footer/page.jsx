import React from 'react'
import styles from "./footer.module.css";
import { SiLinkedin ,SiAboutdotme , SiGithub, SiInstagram } from "react-icons/si";
const page = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="">
        <div className="">
          <p className={styles.footer_link}>
            © {year} Bits-Of-C0de —
            <a
              href=""
              rel="noopener noreferrer"
              className="text-gray-50 ml-1"
              target="_blank"
            >
              @AkashShankar
            </a>
          </p>
          <span className={styles.footer_links}>
            <a
              className=""
              href=""
              rel="noopener noreferrer"
              target="_blank"
           
              >
             <SiAboutdotme/>
             
            </a>
            <a
              className=""
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
             <SiGithub/>
            </a>
            <a
              className=""
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
             <SiInstagram/>
            </a>
            <a
              className=""
              href=""
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiLinkedin/>
             
            </a>
          </span>
        </div>
      </div>
   
   </footer> 
  )
}

export default page
