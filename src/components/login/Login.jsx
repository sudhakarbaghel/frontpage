import styles from "./login.module.css"
import cross from "../../assets/cross.svg"
import mobile from "../../assets/mobile.svg"
import show from "../../assets/passShow.svg"
import hide from "../../assets/passHide.svg"
import { useState } from "react"

export default function Login({setOpenLogin,openLogin,setOpenRequest}) {
    const[password,setPassword]=useState("")
    const [username, setUsername] = useState("")
    const [v, sV] = useState(false);
    
    return (
        <div className={styles.login}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <p>Login to</p>
                    <span>Wherified</span>
                </div>
                <img onClick={()=>setOpenLogin(false)} src={cross} alt="" />
            </div>
            <div className={styles.form}>
                <div className={`${ styles.inputcontainer } ${styles.ic1}`}>
                    <input  onChange={(e)=>setUsername(e.target.value)} autoComplete="off" value={username} id="firstname" className={styles.input} type="text" placeholder=" " />
                     
                    <label className={styles.placeholder}>First name</label>
                </div>
                <div className={`${styles.inputcontainer} ${styles.ic2}`}>
                    <input  onChange={(e)=>setPassword(e.target.value)} autoComplete="off" value={password} id="lastname" className={styles.input} type={v ? 'text' : 'password'} placeholder=" " />
                    
                    <label   className={styles.placeholder}>Password</label>
                    {v ? <img className={styles.pass}  onClick={()=>sV(!v)} src={show} /> : <img className={styles.pass} onClick={()=>sV(!v)} src={ hide} /> }
                </div>
                <div className={styles.checkbox}>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <span>Remember me</span>
                    </div>
                    <span>Forgot Password</span>
                </div>
                <button type="text" className={styles.submit}>Login</button>
                <span>Or</span>
                <div onClick={()=>setOpenRequest(true)} className={styles.formBottom}>
                    <img src={mobile} alt="" />
                    <span  >Login with OTP</span>
                
                </div>

            </div>
            <div className={styles.bottom}><span style={{ color:"#9e9e9e"}}>Don't have an account?</span>
                <span className={styles.createAcc}> Create Account</span></div>
        </div>
    )
}
