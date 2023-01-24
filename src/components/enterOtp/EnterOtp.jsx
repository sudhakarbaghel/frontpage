import styles from "./enterOtp.module.css"
import cross from "../../assets/cross.svg"
import left from "../../assets/left.svg"
import { useState } from "react";



export default function Login({ setOpenEnterOtp, setOpenRequest, setOpenLogin }) {

 
    
    const [otp, setOTP] = useState(['', '', '', '']);
 
    const handleChange = (e, index) => {
        let newOTP = [...otp];
        if (e.target.value.length === 1) {
            newOTP[index] = e.target.value;
            if (index !== 3) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        } else if (e.target.value.length === 0) {
            newOTP[index] = '';
            if (index !== 0) {
                document.getElementById(`otp-${index - 1}`).focus();
            }
        }
        setOTP(newOTP);
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
                    {otp.map((otpDigit, index) => (
                        <input
                            key={index}
                            id={`otp-${index}`}
                            type="number"
                            pattern="[0-9]*"
                            maxLength={1}
                            value={otpDigit}
                            className={styles.input}
                            onChange={e => handleChange(e, index)}
                        />
                    ))}
                </div>
                <div className={styles.resend}><span className={styles.light}>Resend in</span>
                    <span className={styles.dark}>00:32</span></div>
                <button type="text" className={styles.submit}>Submit OTP</button>
            </div>
        </div>
    )
}
