import "./editProfileCenter.scss"
import dustbin from "../../assets/dustbin.svg"
import add from "../../assets/add.svg"
import addsmall from "../../assets/addsmall.svg"
import deletesmall from "../../assets/deletesmall.svg"
import PopUp from "../../components/poupLayout/PopupLayout"
import DragAndUpload from "../dragAndUpload/DragAndUpload"
import { useState } from "react"

export default function EditProfileCenter() {
    const [showPopUp, setShowPopUp] = useState(false)
    const [coverPic, setCoverPic] = useState("https://images.pexels.com/photos/4367584/pexels-photo-4367584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    const [profilePic, setProfilePic] = useState("https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=400")
    console.log(coverPic)
   
    function handleShowPop(s) {
        if (s == "cover")
        { 
           setShowPopUp("cover") 

        }
        else
        { 
            
            setShowPopUp("profile")

        }
         

    }
    return (
        <div className="editProfileCenter">
            {showPopUp=="cover" && <PopUp child={<DragAndUpload button="true"  setShowPopUp={setShowPopUp} setPic={setCoverPic} />} />}
            {showPopUp=="profile" && <PopUp child={<DragAndUpload  button="true" setShowPopUp={setShowPopUp} setPic={setProfilePic} />} />}

            <div className="editProfileCenterTop">
                <div className="editProfileCenterTopHeadingWrapper">
                    <h2>Edit Profile</h2>
                    <span>Amet minim molit non deserunt ullamco</span>
                </div>
                <div className="editProfileCenterTopContainer">
                    <span>
                        Change Cover picture
                    </span>
                    <div className="editProfileCenterTopImgWrapper">
                        <img src={coverPic} alt="" />
                        <div className="editProfileCenterTopButtonWrap">
                            <img src={dustbin} alt="" />
                            <img onClick={() => handleShowPop("cover")} src={add} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="editProfileCenterBottom">
                <div className="editProfileCenterBottomTop">
                    <span>Change Profile picture</span>
                    <div className="editProfileCenterBottomImgWrap">
                        <div>
                            <img src={profilePic} alt="" />
                        </div>
                        <div className="editProfileCenterBottomButtonWrap">
                            <button onClick={() => handleShowPop("profile")} style={{ color: "#2A47AA", backgroundColor: "#C5CEFF" }}>
                                <img  src={addsmall} alt="" /> <span>Upload new photo</span>
                            </button>
                            <button style={{ color: "#E00000" }}>
                                <img src={deletesmall} alt="" />
                                <span>Remove profile picture</span>
                            </button>
                        </div>
                    </div>

                    <div className="editProfileCenterBottomForm">

                        <span>
                            Personal details
                        </span>
                        <div className=" editProfileCenterInputWrap">
                            <div className="editProfileCenterInputcontainer">
                                <input autoComplete="off"  className="editProfileCenterInput" type="text" placeholder=" " />
                                <label className="editProfileCenterPlaceholder">Full name</label>
                            </div>
                            <div className="editProfileCenterInputcontainer">
                                <input autoComplete="off"  className="editProfileCenterInput" type="text" placeholder=" " />
                                <label className="editProfileCenterPlaceholder">E-mail</label>
                            </div>
                            <div className="editProfileCenterInputcontainer">
                                <input autoComplete="off"  className="editProfileCenterInput" type="text" placeholder=" " />
                                <label className="editProfileCenterPlaceholder">Mobile number</label>
                            </div>
                            <div className="editProfileDoubleInput">
                                <div className="editProfileCenterInputcontainer">
                                    <input autoComplete="off"  className="editProfileCenterInput" type="text" placeholder=" " />
                                    <label className="editProfileCenterPlaceholder">Date-of-birth</label>
                                </div> <div className="editProfileCenterInputcontainer">
                                    <input autoComplete="off"  className="editProfileCenterInput" type="text" placeholder=" " />
                                    <label className="editProfileCenterPlaceholder">Gender</label>
                                </div>
                            </div>

                        </div>
                        <div className="editProfileBottomButtonWrap">
                            <button className="editProfileBottomFirstBtn">Cancel</button>
                            <button onClick={()=>{}} className="editProfileBottomSecBtn">Save Changes</button>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}
