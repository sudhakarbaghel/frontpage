import styles from "./requestOtp.module.css"
import cross from "../../assets/cross.svg"
import mobile from "../../assets/email.svg"
 import "./requestOtp.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from "react"

export default function Login({ setOpenEnterOtp ,setOpenRequest,setOpenLogin }) {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [v, sV] = useState(false);
    const [value, setValue] = useState()
    return (
        <div className={styles.login}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <p>Login to</p>
                    <span>Wherified</span>
                </div>
                <img onClick={() => { setOpenRequest(false); setOpenLogin(false) }} src={cross} alt="" />
            </div>
            <div className={styles.form}>
                <div className={`${styles.inputcontainer}  ${styles.ic1}`}>
                    {/* <input pattern="[0-9]*" type="number" max="9" onChange={(e) => setUsername(e.target.value)} autoComplete="off" value={username}  className={styles.input}   placeholder=" " /> */}
                   
                    <PhoneInput
                        
                        value={value}
                        international={false}
                        onChange={setValue}
                        defaultCountry="IN"
                      
                        className={`PhoneInputInput ${styles.input}`} 
                    />
                    <label  className={styles.placeholder}>Mobile Number</label>
                </div>
              
                <div className={styles.checkbox}>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span>Remember me</span>
                    </div>
                   
                </div>
                <button onClick={()=>setOpenEnterOtp(true)} type="text" className={styles.submit}>Request OTP</button>
                <span>Or</span>
                <div onClick={() => setOpenRequest(false)} className={styles.formBottom}>
                    <img src={mobile} alt="" />
                    <span>Login with Email</span>

                </div>

            </div>
            <div className={styles.bottom}><span style={{ color: "#9e9e9e" }}>Don't have an account?</span>
                <span className={styles.createAcc}> Create Account</span></div>
        </div>
    )
}
