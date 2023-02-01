import Leftbar from "../../components/leftbar/Leftbar"
import Navbar from "../../components/navbar/Navbar"
import AddServicesCenter from "../../components/addServicesCenter/AddServicesCenter"
import ProfileCard from "../../components/profileCard/ProfileCard"
import  "./addServices.scss"

export default function AddServices() {
  return (
    <>
      <Navbar />
      <div className="addServices">
        <div className="addServicesContainer">
          <div className="addServicesLeftBarWrap">
            <Leftbar />
          </div>
          <div className="addServicesCenterWrap">
            <AddServicesCenter />
          </div>
          <div className="addServicesRightBarWrap">
            <span>Preview</span>
            <ProfileCard  />
          </div>
        </div>
      </div>
    </>
  )
}
