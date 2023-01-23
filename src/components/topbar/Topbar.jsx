import { useEffect } from "react";
import { useState } from "react";
import styles from "./topbar.module.css"

export default function Topbar() {
  
  
  return (
    < div className={` ${styles.topbar}  `}
      style={{ transition: 'transform 2s ease-in-out' }} >
      <span>Graphic Design</span>
      <span>Digital Marketing</span>
      <span>Video & Animation</span>
      <span>Music and Audio</span>
      <span>Writing and Translation</span>
      <span>Programming</span>
      <span>Business</span>
      <span>Lifestyle</span>
      <span>Trending</span>
    </div >
  
      
  )
}
