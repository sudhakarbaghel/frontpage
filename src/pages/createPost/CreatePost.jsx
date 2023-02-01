import "./createPost.scss"
import Navbar from "../../components/navbar/Navbar"
import arrow from "../../assets/left.svg"
import CreatePostCenter from "../../components/createPostCenter/CreatePostCenter"
import JobAsking from "../../components/jobAsking/JobAsking"
export default function CreatePost() {
  const img1 = ["https://images.pexels.com/photos/15098967/pexels-photo-15098967.jpeg?auto=compress&cs=tinysrgb&w=600"]

  return (<>
    <Navbar />
    <div className="createPost">
      <div className="createPostContainer">
        <div className="createPostLeftBar">
          <div>
            <img src={arrow} alt="" />
            <span>
              Back to dashboard
            </span>
          </div>
        </div>
        <div className="createPostCenterWrap">
          <CreatePostCenter />
        </div>
        <div className="createPostRightBarWrap">
          <span>Preview</span>
          <JobAsking hireMe="true" img={img1} preview={ true} />
        </div>
      </div>
    </div>
  </>
  )
}