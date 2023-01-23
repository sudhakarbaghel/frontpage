import styles from "./enterOtp.module.css"
import cross from "../../assets/cross.svg"
import left from "../../assets/left.svg"

 

export default function Login({ setOpenEnterOtp, setOpenRequest, setOpenLogin }) {
     

    return (
        <div className={styles.login}>
            <div className={styles.top}>
                <img src={left} alt="" />
                <img onClick={() => { setOpenEnterOtp(false); setOpenRequest(false); setOpenLogin(false) }} src={cross} alt="" />
            </div>
            <div className={styles.center}>
                <div className={styles.centerFirstItem}>
                    <span className={styles.dark}>Enter Your</span><span style={{ color:'#2a47aa'}}> OTP</span>
                </div>
                <div className={styles.centerItem}>
                    <div >
                        <span className={styles.light}>Sent to</span> <span className={styles.dark}>+91 8321564895</span>
                    </div>
                    <span onClick={() => { setOpenEnterOtp (false)}} className={styles.dark}>Change Number</span>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.inputWrap}>
                    <div className={`${styles.inputcontainer} ${styles.ic1}`}>
                        <input   className={styles.input} type="text" pattern="\d*" maxLength={1} />

                    </div>
                    <div className={`${styles.inputcontainer} ${styles.ic1}`}>
                        <input  className={styles.input} type="text" maxLength={1}  />

                    </div>
                    <div className={`${styles.inputcontainer} ${styles.ic1}`}>
                        <input  className={styles.input} type="text" maxLength={1}  />

                    </div>
                    <div className={`${styles.inputcontainer} ${styles.ic1}`}>
                        <input  className={styles.input} type="text" maxLength={1}  />

                    </div>

                </div>
                <div className={styles.resend}><span className={styles.light}>Resend in</span>
                    <span className={styles.dark}>00:32</span></div>
                <button type="text" className={styles.submit}>Submit OTP</button>
            </div>
        </div>
    )
}
