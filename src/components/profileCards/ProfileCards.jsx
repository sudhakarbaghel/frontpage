import styles from "./profileCards.module.css"
import Card from "../profileCard/ProfileCard"
import slidebtn from "../../assets/slidebtn.svg"
import slidebtn2 from "../../assets/slidebtn2.svg"
import { useRef, useState } from "react";
export default function ProfileCards() {
    const containerRef = useRef(null);
    const cardWidth = 340; // width of each card
    const [currentCard, setCurrentCard] = useState(0);
    const totalCards = 5;

    const handleLeftArrowClick = () => {
        if (currentCard > 0) {
            setCurrentCard(currentCard - 1);
            containerRef.current.scrollTo({
                left: (currentCard - 1) * cardWidth,
                behavior: 'smooth'
            });
        }
    }

    const handleRightArrowClick = () => {
        if (currentCard < totalCards - 1) {
            setCurrentCard(currentCard + 1);
            containerRef.current.scrollTo({
                left: (currentCard + 1) * cardWidth,
                behavior: 'smooth'
            });
        }
    }
    const handleSliderChange = (e) => {
        setCurrentCard(e.target.value);
        containerRef.current.scrollTo({
            left: e.target.value * cardWidth,
            behavior: 'smooth'
        });
    }
  return (
      <div className={styles.cards}>
          <div className={styles.sliderContainer} >
              <input className={styles.input} type="range" min={0} max={totalCards - 1} value={currentCard} onChange={handleSliderChange} />
          </div>
          
          <img src={slidebtn} className={styles.btnOne} onClick={handleLeftArrowClick} alt="" />
          <img src={slidebtn2} className={styles.btnTwo} onClick={handleRightArrowClick}  alt="" />
          <span>Popular Services</span>
          <div className={styles.cardWrapper} ref={containerRef}>
              <div >
                  <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEE0prI_uj9C95fShxbVJ75PybiMK9JvGKb5uz3FcVjdebKvm"} />
              </div>
              <div>
                  <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEE0prI_uj9C95fShxbVJ75PybiMK9JvGKb5uz3FcVjdebKvm"} />
              </div>
              <div>
                  <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEE0prI_uj9C95fShxbVJ75PybiMK9JvGKb5uz3FcVjdebKvm"} />
              </div>
              <div>
                  <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEE0prI_uj9C95fShxbVJ75PybiMK9JvGKb5uz3FcVjdebKvm"} />
              </div>
              <div>
                  <Card img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEE0prI_uj9C95fShxbVJ75PybiMK9JvGKb5uz3FcVjdebKvm"} />
                  </div>
          </div>
      </div>
  )
}
