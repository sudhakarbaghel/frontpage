import styles from "./popularServicesCard.module.css"
import logo from "../../assets/services.svg"

export default function popularServicesCard(props) {
  return (
    <div className={styles.popularServicesCard}>
      <div >
        <span className={styles.heading}>Web Developers</span>
        <span className={styles.detail}>Lorem ipsum</span>
      </div>
      <img src={logo} alt="" />
    </div>
  )
}
