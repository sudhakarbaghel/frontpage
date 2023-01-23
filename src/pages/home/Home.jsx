import styles from "./home.module.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Topbar from "../../components/topbar/Topbar"
import PopularServicesCards from "../../components/popularServicesCards/PopularServicesCards"
import ProfileCards from "../../components/profileCards/ProfileCards"
import ProfileCardsNoImg from "../../components/profileCardsNoImg/ProfileCardsNoImg"
import Domains from "../../components/domains/Domains"
import Footer from "../../components/footer/Footer"
export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Topbar/>
      <Header />
      <PopularServicesCards />
      <ProfileCards/>
      <ProfileCardsNoImg />
      <Domains />
      <Footer/>
    </div>
  )
}
