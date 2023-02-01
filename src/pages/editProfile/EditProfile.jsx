import "./editProfile.scss"
import Leftbar from "../../components/leftbar/Leftbar"
import Navbar from "../../components/navbar/Navbar"
import EditProfileCenter from "../../components/editProfileCenter/EditProfileCenter"

export default function EditProfile() {
  return (
    <>
      <Navbar/>
      <div className="editProfile">
        <div className="editProfileContainer">
          <div className="editProfileLeftBar">
            <Leftbar />
          </div>
          <div className="editProfileCenter">
             <EditProfileCenter/> 
          </div>
          <div className="editProfileRightBar">
          </div>
        </div>
      </div>
    </>
  )
}
  
