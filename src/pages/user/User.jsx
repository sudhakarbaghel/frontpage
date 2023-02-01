import "./user.scss"
import Leftbar from "../../components/leftbar/Leftbar"
import Navbar from "../../components/navbar/Navbar"
import UserCenter from "../../components/usercenter/UserCenter"
import Rightbar from "../../components/rightbar/Rightbar"
export default function User() {
  return (
    <>
      <Navbar />
      <div className="user">
        <div className="container">
          <div className="leftBar">
            <Leftbar />
          </div>
          <div className="center">
            <UserCenter/>
          </div>
          <div className="rightBar">
            <Rightbar/>
          </div>
        </div>
      </div>
    </>
  )
}
