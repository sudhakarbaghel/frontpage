import styles from "./header.module.css"
import Wherified from "../../assets/Wherified.svg"
import LocationIcon from "../../assets/locationIcon.svg"
import Search from "../../assets/Search.svg"
import { useEffect, useState } from "react"
export default function Header() {
  const [Location, setLocation] = useState("Kukatpally, Hyderabad")
  const [text, setText] = useState("")
  const [locationSelect, setLocationSelect] = useState(false);


  return (
    <div className={styles.header} >
      <div className={styles.heading} onClick={() => setLocationSelect(false)}>
        <span>Find</span>
        <img src={Wherified} alt="" />
        <span>Professionals nearby</span>
      </div>
      <div className={styles.search}>
        <div className={styles.barWrap}>
          <div className={styles.left} onClick={() => setLocationSelect(!locationSelect)} >
            <img src={LocationIcon} alt="" />
            <input onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Enter a place" value={Location} />
            <span className={styles.headerBorder}>|</span>
           
          </div>
          <div className={styles.center} onClick={() => setLocationSelect(false)}>
            <img src={Search} alt="" />
            <input type="search" placeholder="Search" onChange={(e) => setText(e.target.value)} value={text} />
          </div>
          <div className={styles.right}>
            <button >
              Search
            </button>
          </div>
          {locationSelect &&
            <div className={styles.locationDrop} onClick={() => setLocationSelect(false)}>
              <span  onClick={(e)=>setLocation(e.target.innerHTML)} >
                Bhopal
              </span>
              <span onClick={(e)=>setLocation(e.target.innerHTML)}>
                Pune
              </span>
              <span onClick={(e)=>setLocation(e.target.innerHTML)}>
                Chennai
              </span>
              <span onClick={(e)=>setLocation(e.target.innerHTML)}>
                Bangalore
              </span>
              <span onClick={(e)=>setLocation(e.target.innerHTML)}>
                Delhi
              </span>
              <span onClick={(e)=>setLocation(e.target.innerHTML)}>
                Mumbai
              </span>

            </div> }
         
        </div>
        <div className={styles.popularSearch} onClick={() => setLocationSelect(false)}>
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
