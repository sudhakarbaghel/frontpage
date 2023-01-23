import styles from "./navbar.module.css"
import logo from "../../assets/logo.svg"
import textLogo from "../../assets/textLogo.svg"
import Login from "../login/Login";
import RequestOtp from "../requestOtp/RequestOtp"
import EnterOtp from "../enterOtp/EnterOtp"
import { useEffect, useState } from "react";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openRequest, setOpenRequest] = useState(false);
    const [openEnterOtp, setOpenEnterOtp] = useState(false);

 

    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <img className={styles.logo}  src={logo} alt="" />
                <img className={styles.titleImg} src={textLogo} alt="" />
            </div>
            <div className={styles.center}>
                <span>Home</span>
                <span>Find Universities</span>
                <span>Learning</span>
                <span>Support</span>
                <span>About Us</span>
            </div>
            <div className={styles.right}>
                <button onClick={() => setOpenLogin(true)} className={styles.login}>Log In</button>
                <button className={styles.register}>Register</button>
            </div>
            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
                <div className={styles.line} />
                <div className={styles.line} />
                <div className={styles.line} />
            </div>
            <div onClick={() => setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-100vw" }}>
                <div className={styles.menuLogin}>
                    <button onClick={() => setOpenLogin(true)}  className={styles.login}>Log In</button>
                    <span>/</span>
                    <button className={styles.register}>Register</button>
                </div>
                <div className={styles.firstListWrap}>
                    <div className={styles.firstList}>
                        <span >HOME</span>
                        <span >Find Universities</span>
                        <span >Learning</span>
                        <span >Support</span>
                        <span >Photography</span>
                        <span >About Us</span>
                    </div>
                </div>
                <hr className={styles.rule} />
                <div className={styles.secListWrap}>
                    <span>Explore Categories</span>
                    <div className={styles.firstList}>
                        <span>Graphic Design</span>
                        <span>Digital Marketing</span>
                        <span>Video & Animation </span>
                        <span>Music and Audio </span>
                        <span>Writing and Translation</span>
                        <span>Programming</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                        <span>Trending</span>
                    </div>
                </div>
            </div>
            <div  className={styles.showLogin} style={{ right: openLogin ? "0px" : "-100vw" }}  >
                <Login  setOpenLogin={setOpenLogin} setOpenRequest={setOpenRequest}  />
            </div>
            <div  className={styles.showLogin} style={{ right: openRequest ? "0px" : "-100vw" }}  >
                <RequestOtp setOpenEnterOtp={setOpenEnterOtp} setOpenRequest={setOpenRequest} setOpenLogin={setOpenLogin} />
            </div>
            <div  className={styles.showLogin} style={{ right: openEnterOtp ? "0px" : "-100vw" }}  >
                <EnterOtp setOpenEnterOtp={setOpenEnterOtp} setOpenRequest={setOpenRequest} setOpenLogin={setOpenLogin} />
            </div>
            
           
        </div>
    )
}
