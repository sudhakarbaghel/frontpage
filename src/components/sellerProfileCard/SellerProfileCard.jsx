import "./sellerProfileCard.scss"
import star from "../../assets/starr.svg"
import pic from "../../assets/bimg.svg"
export default function SellerProfileCard() {
  return (
    <div className="sellerProfileCard">
      <div className="sellerProfileCardTop">
        <img src={pic} alt="" />
      </div>
      <div className="sellerProfileCardCenter">
        <div className="sellerProfileCardCenterImgWrap">
          <img src="https://images.pexels.com/photos/9660918/pexels-photo-9660918.jpeg?auto=compress&cs=tinysrgb&w=300" alt="" />
        </div>
        <div className="sellerProfileCardCenterBottom">
          <div className="sellerProfileCardStoreTitle">
            <span>
              Dubai Stores
            </span>
            <div>
              <span>Groceries</span>
              <span>|</span>
              <span>Kitchenware</span>
              <span>|</span>
              <span>Snacks</span>
            </div>
          </div>
          <div className="sellerProfileCardButtonWrap">
            <button className="sellerProfileCardFirstBtn"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 8.88033C9.05667 8.88033 8.66 9.05533 8.35667 9.32949L4.1975 6.90866C4.22667 6.77449 4.25 6.64033 4.25 6.50033C4.25 6.36033 4.22667 6.22616 4.1975 6.09199L8.31 3.69449C8.625 3.98616 9.03917 4.16699 9.5 4.16699C10.4683 4.16699 11.25 3.38533 11.25 2.41699C11.25 1.44866 10.4683 0.666992 9.5 0.666992C8.53167 0.666992 7.75 1.44866 7.75 2.41699C7.75 2.55699 7.77333 2.69116 7.8025 2.82533L3.69 5.22283C3.375 4.93116 2.96083 4.75033 2.5 4.75033C1.53167 4.75033 0.75 5.53199 0.75 6.50033C0.75 7.46866 1.53167 8.25033 2.5 8.25033C2.96083 8.25033 3.375 8.06949 3.69 7.77782L7.84333 10.2045C7.81417 10.327 7.79667 10.4553 7.79667 10.5837C7.79667 11.5228 8.56083 12.287 9.5 12.287C10.4392 12.287 11.2033 11.5228 11.2033 10.5837C11.2033 9.64449 10.4392 8.88033 9.5 8.88033ZM9.5 1.83366C9.82083 1.83366 10.0833 2.09616 10.0833 2.41699C10.0833 2.73783 9.82083 3.00033 9.5 3.00033C9.17917 3.00033 8.91667 2.73783 8.91667 2.41699C8.91667 2.09616 9.17917 1.83366 9.5 1.83366ZM2.5 7.08366C2.17917 7.08366 1.91667 6.82116 1.91667 6.50033C1.91667 6.17949 2.17917 5.91699 2.5 5.91699C2.82083 5.91699 3.08333 6.17949 3.08333 6.50033C3.08333 6.82116 2.82083 7.08366 2.5 7.08366ZM9.5 11.1787C9.17917 11.1787 8.91667 10.9162 8.91667 10.5953C8.91667 10.2745 9.17917 10.012 9.5 10.012C9.82083 10.012 10.0833 10.2745 10.0833 10.5953C10.0833 10.9162 9.82083 11.1787 9.5 11.1787Z" fill="black" />
            </svg>
              <span>Share</span>
            </button>
            <button className="sellerProfileCardSecBtn">
              Edit Profile
            </button>
          </div>
        </div>
        <hr className="sellerProfileCardHr"/>
        <div className="sellerProfileCardBottom">
          <div>
            <span>Location</span>
            <p>Bangalore, India</p>
          </div>
          <div>
            <span>Offerings</span>
            <p>Products</p>
          </div>
          <div>
            <span>Website</span>
            <p>https://advancetech.io/</p>
          </div>
          <div>
            <span>Ratings</span>
            <p>
              <img src={star} alt="" />
              4.6
            </p>
          </div>
        </div>
      </div>
     
    </div>
  )
}
