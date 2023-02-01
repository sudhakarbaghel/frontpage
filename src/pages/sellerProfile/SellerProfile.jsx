import Leftbar from "../../components/leftbar/Leftbar"
import Navbar from "../../components/navbar/Navbar"
import SellerProfileCenter from "../../components/sellerProfileCard/SellerProfileCard"
import WriteMessage from "../../components/writeMessage/WriteMessage"
import Analytics from "../../components/analytics/Analytics"
import "./sellerProfile.scss"

export default function SellerProfile() {
  return (
    <>
      <Navbar />
      <div className="sellerProfile">
        <div className="sellerProfileContainer">
          <div className="sellerProfileLeftBarWrap">
            <Leftbar />
          </div>
          <div className="sellerProfileCenterWrap">
            <SellerProfileCenter />
            <div className="sellerProfileCenterWrapItem">
              <div className="sellerProfileCenterWriteMessageWrap">
                <WriteMessage />

              </div>
              <div className="sellerProfileCenterAnalyticsWrap">
                <Analytics />

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
