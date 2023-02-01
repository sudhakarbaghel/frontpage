import "./reportPost.scss"
import logo from "../../assets/cross.svg"
import { useState } from "react";

export default function ReportPost({ setOpenReport }) {
    const [selectedReason, setSelectedReason] = useState('');

    function handleChange(event) {
        setSelectedReason(event.target.value);
    }

    return (
        <div className="reportPost">
            <div className="reportPostTop">
                <div>
                    <span className="reportPostTopHeading">Report Post</span>
                    <img onClick={()=>setOpenReport(false)} style={{cursor:"pointer"}} src={logo} alt="" />
                </div>
                <span>Why are you reporting this post?</span>

            </div>


            <form>
                <div>
                    <span>Its a scam or fraud</span>
                    <input
                        className="reportPostRadio"
                        type="radio"
                        name="Reason"
                        value="Its a scam or fraud"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <span>Intellectual property voilation</span>
                    <input
                        className="reportPostRadio"
                        type="radio"
                        name="Reason"
                        value="Intellectual property voilation"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <span>False information</span>
                    <input
                        className="reportPostRadio"
                        type="radio"
                        name="Reason"
                        value="False information"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <span>Voilence or harrasment</span>
                    <input
                        className="reportPostRadio"
                        type="radio"
                        name="Reason"
                        value="Voilence or harrasment"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <span>I don t like it</span>
                    <input
                        className="reportPostRadio"
                        type="radio"
                        name="Reason"
                        value="I don t like it"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <span>Any other</span>
                    <input
                        className="reportPostRadio"
                        type="radio"
                        name="Reason"
                        value="Any other"
                        onChange={handleChange}
                    />
                </div>


                <button type="submit"><span>Submit</span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.56673 4.5834H9.26673L7.57506 6.27506C7.34173 6.5084 7.34173 6.8584 7.57506 7.09173C7.8084 7.32506 8.1584 7.32506 8.39173 7.09173L11.0751 4.4084C11.3084 4.17507 11.3084 3.82507 11.0751 3.59173L8.39173 0.908398C8.1584 0.675065 7.8084 0.675065 7.57506 0.908398C7.34173 1.14173 7.34173 1.49173 7.57506 1.72507L9.26673 3.41673H1.56673C1.27507 3.41673 0.983398 3.65007 0.983398 4.00007C0.983398 4.35007 1.27507 4.5834 1.56673 4.5834Z" fill="white" />
                </svg>
                </button>
            </form>
        </div>
    )
}
