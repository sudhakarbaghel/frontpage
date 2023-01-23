import styles from "./footer.module.css"
import logo from "../../assets/rightarrow.svg"
import Logo from "../../assets/logo.svg"
import textLogo from "../../assets/textLogo.svg"
import appStore from "../../assets/app_store.svg"
import playStore from "../../assets/play_store.svg"
import fb from "../../assets/fb.svg"
import insta from "../../assets/insta.svg"
import twitter from "../../assets/twitter.svg"
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <span>Join our news letter</span>
          <input type="text" placeholder="Email Address" />
          <img src={logo} alt="" />
        </div>
        <div className={styles.right}>
          <img src={appStore} alt="" />
          <img src={playStore} alt="" />
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.center}>
        <div className={styles.centerLeft}>
          <div className={styles.centerLeftItem}>
            <img src={Logo} alt="" />
            <img src={textLogo} alt="" />
          </div>
          <div className={styles.centerLeftIcon}>
            <img src={fb} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
          </div>
        </div>
        <div className={styles.centerRight}>
          <div className={styles.centerRightItem}>
            <p>Services</p>
            <span>Digital Marketing</span>
            <span>Compaigns</span>
            <span>Branding</span>
            <span>Offline</span>
          </div>
          <div className={styles.centerRightItem}>
            <p>About</p>
            <span>Our Story</span>
            <span>Team</span>
            <span>Careers</span>
          </div>
          <div className={styles.centerRightItem}>
            <p>Need Help</p>
            <span>FAQs</span>
            <span>Contact Us</span>
          </div>
          <div className={styles.centerRightItem}>

          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2022 Wherified. All Rights Reserved</span>
        <div>
          <span>Terms and Conditions </span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}
