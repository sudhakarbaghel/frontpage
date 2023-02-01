import "./userCenter.scss"
import WriteMessage from "../writeMessage/WriteMessage"
import JobAsking from "../jobAsking/JobAsking"
import ResharedPost from "../resharePost/ResharedPost"
import ReportPost from "../reportPost/ReportPost"
import EditPost from "../editPost/EditPost"

export default function UserCenter() {
  const img = [
    "https://images.pexels.com/photos/15098967/pexels-photo-15098967.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15098967/pexels-photo-15098967.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15098967/pexels-photo-15098967.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15098967/pexels-photo-15098967.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15098967/pexels-photo-15098967.jpeg?auto=compress&cs=tinysrgb&w=600"

  ]
     
  const img1 = ["https://images.pexels.com/photos/15098967/pexels-photo-15098967.jpeg?auto=compress&cs=tinysrgb&w=600"]
  return (
    <div className="userCenter">
      <WriteMessage />
      <JobAsking img={img} hireMe="false" />
      <ResharedPost jobAsking={ <JobAsking img={img1} hireMe="true"/>} />
      <JobAsking img={img1} hireMe="true"/>
      
    </div>
  )
}
