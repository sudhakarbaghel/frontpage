import styles from "./profileCard.module.css"
import profile from "../../assets/personLarge.svg"
import {FiBookmark} from 'react-icons/fi';
import pic from "../../assets/pic.svg"
import dot from "../../assets/dot.svg"
import { ReactComponent as Save } from "../../assets/save.svg"
import star from "../../assets/star.svg"
import bar from "../../assets/bar.svg"
import locationIcon from "../../assets/locationIcon.svg"
import { useState } from "react"

export default function ProfileCard(props) {
  const [saved,setSaved]=useState(false)
  return (
    <div className={styles.card}>
      <img src={props.img} alt="" style={{ background: "none" }} />
      <div className={styles.center}>
        <div className={styles.imageWrapper}>
          <div>
            <img src={pic} alt="" />
            <img className={styles.dot} src={dot} alt="" />
          </div>
          <span>Max Mayfield</span>
        </div>

        <FiBookmark onClick={() => setSaved(!saved)} style={{ fill: saved ? "#ffb600" : "", cursor: "pointer", width: "24px", height: "24px", color: saved ? "#ffb600" : "" }} />
      </div>
      <div className={styles.tags}>
        <span>
          Blockchain Developer
        </span>
        <span>
          MongoDB
        </span>
        <span>
          Express
        </span>
        <span>
          ReactJS
        </span>
        <span>
          +2 more
        </span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomFirst}>
          <div className={styles.firstDiv}>
            <img src={star} alt="" style={{width:"16px",height:"16px"}} />
            <span className={styles.light}>4.5</span>
            <span className={styles.light}>(128 Reviews)</span>
          </div>
          <div className={styles.secDiv}>
            <img src={bar} alt="" />
            <span >This week’s top
            </span>
          </div>
        </div>

        <hr className={styles.rule} />
        <div className={styles.bottomSec}>
          <div>
            <img style={{ width: "16px", height: "16px" }} src={locationIcon} alt="" />
            <span className={styles.light}>
              Kukatpally, Hyderabad
            </span>
          </div>
          <div className={styles.money}>
            <span className={styles.iconFirst}>₹</span>
            <span className={styles.bold}>1200</span>
            <span className={styles.iconSec}>/hr</span>
          </div>
        </div>
      </div>
    </div>

  )
}
