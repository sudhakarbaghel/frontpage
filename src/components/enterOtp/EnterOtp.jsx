import styles from "./enterOtp.module.css"
import cross from "../../assets/cross.svg"
import left from "../../assets/left.svg"
import { useState } from "react";



export default function Login({ setOpenEnterOtp, setOpenRequest, setOpenLogin }) {

    const [otp, setOTP] = useState("");

    function handleOTP(e, index) {
        setOTP(otp.slice(0, index) + e.target.value + otp.slice(index + 1));
        if (e.target.value.length === 1) {
            e.target.nextSibling.focus();
        }
    }
    function handleKeyDown(e, index) {
        if (e.key === "Backspace" && e.target.value === "") {
            e.target.previousSibling.focus();
        }
    }
    return (
        <div className={styles.login}>
            <div className={styles.top}>
                <img src={left} alt="" />
                <img onClick={() => { setOpenEnterOtp(false); setOpenRequest(false); setOpenLogin(false) }} src={cross} alt="" />
            </div>
            <div className={styles.center}>
                <div className={styles.centerFirstItem}>
                    <span className={styles.dark}>Enter Your</span><span style={{ color: '#2a47aa' }}> OTP</span>
                </div>
                <div className={styles.centerItem}>
                    <div >
                        <span className={styles.light}>Sent to</span> <span className={styles.dark}>+91 8321564895</span>
                    </div>
                    <span onClick={() => { setOpenEnterOtp(false) }} className={styles.dark}>Change Number</span>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.inputWrap}>
                    {[...Array(4)].map((_, i) => (
                        <input key={i} onKeyDown={(e) => handleKeyDown(e, i)} pattern="[0-9]*" className={styles.input} onChange={(e) => handleOTP(e, i)}
                                tabIndex={i + 1} type="number" maxLength={1} />
                    ))}
                </div>
                <div className={styles.resend}><span className={styles.light}>Resend in</span>
                    <span className={styles.dark}>00:32</span></div>
                <button type="text" className={styles.submit}>Submit OTP</button>
            </div>
        </div>
    )
}
