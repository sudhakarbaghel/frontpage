import styles from "./header.module.css"
import Wherified from "../../assets/Wherified.svg"
import LocationIcon from "../../assets/locationIcon.svg"
import Search from "../../assets/Search.svg"
import { useEffect, useState } from "react"
export default function Header() {
  const [Location, setLocation] = useState("Kukatpally, Hyderabad")
  const [text, setText] = useState("")

   
  return (
    <div className={styles.header}>
      <div className={styles.heading}>
        <span>Find</span>
        <img src={Wherified} alt="" />
        <span>Professionals nearby</span>
      </div>
      <div className={styles.search}>
        <div className={styles.barWrap}>
          <div className={styles.left}>
            <img src={LocationIcon} alt="" />
            <input onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter a place" value={Location} />
            <span className={styles.headerBorder}>|</span>
          </div>
          <div className={styles.center}>
            <img src={Search} alt="" />
            <input type="search" placeholder="Search" onChange={(e) => setText(e.target.value)} value={text} />
          </div>
          <div className={styles.right}>
            <button >
              Search
            </button>
          </div>
        </div>
        <div className={styles.popularSearch}>
          <span onClick={() => setText("Popular")} className={styles.popular}>
            Popular
          </span>
          <span onClick={() => setText("Graphic Design")} className={styles.popularTags}>
            Graphic Design
          </span>
          <span onClick={() => setText("Programming")} className={styles.popularTags}>
            Programming
          </span>
          <span onClick={() => setText("Website Design")} className={styles.popularTags}>
            Website Design
          </span>
          <span onClick={() => setText("Video Editing")} className={styles.popularTags}>
            Video Editing
          </span>
          <span onClick={() => setText("Buisness")} className={styles.popularTags}>
            Buisness
          </span>
        </div>

      </div>
    </div>
  )
}
