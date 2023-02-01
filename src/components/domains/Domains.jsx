import  "./domains.scss"
import video from "../../assets/camera.svg"
import graphic from "../../assets/graphic.svg"
import digital from "../../assets/digital.svg"
import writing from "../../assets/writing.svg"
import music from "../../assets/music.svg"
import buisness from "../../assets/buisness.svg"
import programming from "../../assets/programming.svg"
import data from "../../assets/data.svg"

export default function Domains() {
  return (
      <div className="domain">
          <div className="domainWrap">
              <span className="domainHeading">Explore Domains</span>
              <hr className="domainRule" />
          </div>
         
          <div className="domainIconContainer">
              <div className="domainIconWrap">
                  <img src={video} alt="" />
                  <span>Video and Animation</span>
              </div>
              <div className="domainIconWrap">
                  <img src={graphic} alt="" />
                  
                  <span>Graphic Design</span>
              </div>
              <div className="domainIconWrap">
                  <img src={digital} alt="" />
                  
                  <span>Digital Marketing</span>
              </div>
              <div className="domainIconWrap">
                  <img src={writing} alt="" />
                  
                  <span>Writing and Translation</span>
              </div>
              <div className="domainIconWrap">
                  <img src={music} alt="" />
                  
                  <span>Music and Audio</span>
              </div>
              <div className="domainIconWrap">
                  <img src={buisness} alt="" />
                  
                  <span>Business</span>
              </div>
              <div className="domainIconWrap">
                  <img src={programming} alt="" />
                  
                  <span>Programming and Tech</span>
              </div>
              <div className="domainIconWrap">
                  <img src={data} alt="" />
                  
                  <span>Data Analysis</span>
              </div>
          </div>
    </div>
  )
}
