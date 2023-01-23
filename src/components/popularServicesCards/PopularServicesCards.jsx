import styles from "./popularServicesCards.module.css"
import Card from "../popularServicesCard/PopularServicesCard"


export default function PopularServicesCards() {
  return (
    <div className={styles.cards}>
      <span>Popular Services</span>
      <div className={styles.cardWrapper}>
        <div >
          <Card  />
        </div>
        <div>
          <Card  />
        </div>
        <div>
          <Card  />
        </div>
        <div>
          <Card  />
        </div>
        <div>
          <Card  />
        </div>
       
      </div>
    </div>
  )
}
