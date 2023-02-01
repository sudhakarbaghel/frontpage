import { useState } from 'react';
import './responses.scss'
import pic from "../../assets/pic.svg"
export default function Responses() {
    const [responses, setResponses] = useState([
        "Response 1",
        "Response 2",
        "Response 3",
        "Response 4",
        "Response 5",
        "Response 6",
        "Response 7",
        "Response 8",
        "Response 9",
        "Response 10",
        "Response 11",
        "Response 12",
        "Response 13",
        "Response 14",
        "Response 15"
    ]);
    const [showMore, setShowMore] = useState(false);

    const handleClick = () => {
        setShowMore(!showMore);
    }

    return (
        <div className='responses'>
            <span className='responsesHeading'>Your Responses</span>
            <div className='responseContainer' style={showMore ? { overflow: 'auto', maxHeight: '400px' } : {}}>
                {responses.slice(0, showMore ? responses.length : 5).map((response, index) => (

                    <div key={index} className="responseWrapper">
                        <img src={pic} alt="" />
                        <div className='responseWrapperRight'>
                            <p>Joseph George</p>
                            <div className='responseWrapperRightBottom'>
                                <span>Wants to hire you</span>
                                <span>5 min</span>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
            <button onClick={handleClick}>{showMore ? "Show Less" : "See all responses"}</button>
        </div>
    );
}

