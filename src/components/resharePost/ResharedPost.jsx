import "./resharedPost.scss"
import pic from "../../assets/pic.svg"

export default function ResharedPost(props) {
    return (
        <div className="reshardPost">
            <div className="resharedPostTop">
                <img src={pic} alt="" />
                <div>
                    <span className="resharedPostDark">Dustin hrnderun</span>
                    <span className="resharedPostLight">  reshared a post from</span>
                    <span className="resharedPostBlue">  Kimberly gamer</span>
                </div>
              
             
            </div>
            <div className="resharedPostWrapper">
                {props.jobAsking}
            </div>
        </div>
    )
}
