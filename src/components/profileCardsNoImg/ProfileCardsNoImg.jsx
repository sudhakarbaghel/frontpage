import styles from "./profileCardsNoImage.module.css"
import Card from "../profileCard/ProfileCard"
import slidebtn from "../../assets/slidebtn.svg"
import slidebtn2 from "../../assets/slidebtn2.svg"
export default function ProfileCards() {
    return (
        <div className={styles.cards}>

            {/* <img src={slidebtn} className={styles.btnOne} alt="" />
            <img src={slidebtn2} className={styles.btnTwo} alt="" /> */}
            <span>Popular Services</span>
            <div className={styles.cardWrapper}>
                <div >
                    <Card heading={"Web Developers"} detail={"Lorem ipsum"} />
                </div>
                <div>
                    <Card heading={"Web Developers"} detail={"Lorem ipsum"} />
                </div>
                <div>
                    <Card heading={"Web Developers"} detail={"Lorem ipsum"} />
                </div>
                <div>
                    <Card heading={"Web Developers"} detail={"Lorem ipsum"} />
                </div>
                <div>
                    <Card heading={"Web Developers"} detail={"Lorem ipsum"} />
                </div>
            </div>
        </div>
    )
}
