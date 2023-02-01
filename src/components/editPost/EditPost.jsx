import "./editPost.scss"
import logo from "../../assets/cross.svg"
import pic from "../../assets/pic.svg"
import deleteLogo from "../../assets/dustbin.svg"


export default function EditPost({ setOpenEdit }) {
    return (
        <div className="editPost">
            <div className="editPostTop">
                <div>
                    <span className="editPostTopHeading">Edit Post</span>
                    <img onClick={() => setOpenEdit(false)} src={logo} style={{ cursor: "pointer" }} alt="" />
                </div>

            </div>
            <div className="editPostWrapper">
                <div className="editPostWrapperTop">
                    <img src={pic} alt="" />
                    <div>
                        <span>Dustin hender</span>
                        <div>
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.38262 13.5455C6.15287 13.7066 5.84646 13.7064 5.61671 13.5453L5.61503 13.5441L5.61131 13.5414L5.59888 13.5326C5.58842 13.5251 5.57365 13.5145 5.55486 13.5008C5.51727 13.4734 5.46356 13.4337 5.39601 13.3824C5.261 13.2799 5.07035 13.1305 4.84258 12.9397C4.38802 12.5589 3.78058 12.0089 3.17112 11.3322C1.97562 10.0047 0.666504 8.07336 0.666504 5.90877C0.666504 4.44057 1.22062 3.02614 2.21682 1.97819C3.21411 0.929096 4.57414 0.333008 5.99984 0.333008C7.42553 0.333008 8.78556 0.929096 9.78285 1.97819C10.779 3.02614 11.3332 4.44057 11.3332 5.90877C11.3332 8.07336 10.024 10.0047 8.82856 11.3322C8.2191 12.0089 7.61165 12.5589 7.1571 12.9397C6.92933 13.1305 6.73868 13.2799 6.60366 13.3824C6.53612 13.4337 6.4824 13.4734 6.44482 13.5008C6.42602 13.5145 6.41125 13.5251 6.40079 13.5326L6.38837 13.5414L6.38465 13.5441L6.38342 13.5449L6.38262 13.5455ZM3.99984 5.66634C3.99984 4.56177 4.89527 3.66634 5.99984 3.66634C7.10441 3.66634 7.99984 4.56177 7.99984 5.66634C7.99984 6.77091 7.10441 7.66634 5.99984 7.66634C4.89527 7.66634 3.99984 6.77091 3.99984 5.66634Z" fill="#58BCF8" />
                            </svg>
                            <span>Lalchowk, Sringar</span>
                        </div>
                    </div>
                </div>
                <p contentEditable={true}>I’m looking for a blockchain developer in hyderabad |</p>
                <div className="editPostImgWrapper">
                    <img className="editPostImg" src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
                    <img className="editPostImgDel" src={deleteLogo} alt="" />
                </div>
                <div className="editPostButtonWrapper">
                    <button onClick={() => setOpenEdit(false)} className="editPostButtonFirst">Cancel</button>
                    <button className="editPostButtonSec">Save</button>
                </div>
            </div>
        </div>
    )
}




