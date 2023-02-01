import "./jobAsking.scss"
import pic from "../../assets/pic.svg"
import fb from "../../assets/Facebook Like (1).svg"
import arrow from "../../assets/Forward Arrow (1).svg"
import wp from "../../assets/WhatsApp (1).svg"
import call from "../../assets/Union (Stroke).svg"
import { useState } from "react";
import Textarea from 'react-textarea-autosize';
import Popup from "../poupLayout/PopupLayout"
import ReportPost from "../reportPost/ReportPost"
import EditPost from "../editPost/EditPost"


export default function JobAsking({ img, hireMe,preview }) {
    const userImgs = [
        'https://example.com/user1.jpg',
        'https://example.com/user2.jpg',
        // 'https://example.com/user3.jpg',
    ];
    const [dot, setDot] = useState(false)
    const [showPopup, setShowPopup] = useState(false);

    const [openComment, setOpenComment] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [openReport, setOpenReport] = useState(false)
    function handlePopup(s) {
        if (s === "edit") {
            setOpenEdit(true)
        }
        else {
            setOpenReport(true)
        }
    }

    return (
        <div className="jobAsking">
            {
                openReport  && <Popup child={<ReportPost setOpenReport={setOpenReport} />} />}
            {
                openEdit && <Popup child={ <EditPost setOpenEdit={setOpenEdit}/>} />}


            <div className="jobAskingContainer">
                <div className="jobAskingTop">
                    <div>
                        <img src={pic} alt="" />
                        <span>Lucas Sinclair</span>
                    </div>
                    <svg onClick={() => setShowPopup(!showPopup)} width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#9E9E9E" />
                    </svg>

                    {showPopup && !preview &&
                        <div className="jobAskingTopDot">
                            <div onClick={() => { handlePopup("edit") }}>
                                <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.8105 1.5C13.6185 1.5 13.4265 1.57348 13.2803 1.71973L11.7803 3.21973L10.7197 4.28027L2.25 12.75V15.75H5.25L16.2803 4.71973C16.5735 4.42648 16.5735 3.95168 16.2803 3.65918L14.3408 1.71973C14.1946 1.57348 14.0025 1.5 13.8105 1.5ZM13.8105 3.31055L14.6895 4.18945L13.7197 5.15918L12.8408 4.28027L13.8105 3.31055ZM11.7803 5.34082L12.6592 6.21973L4.62891 14.25H3.75V13.3711L11.7803 5.34082Z" fill="#999999" />
                                </svg>

                                <span>Edit</span>
                            </div>
                            <div>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_124_2220)">
                                        <path d="M12.6668 7.125V15.0417H6.3335V7.125H12.6668ZM11.4793 2.375H7.521L6.72933 3.16667H3.9585V4.75H15.0418V3.16667H12.271L11.4793 2.375ZM14.2502 5.54167H4.75016V15.0417C4.75016 15.9125 5.46266 16.625 6.3335 16.625H12.6668C13.5377 16.625 14.2502 15.9125 14.2502 15.0417V5.54167Z" fill="#999999" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_124_2220">
                                            <rect width="19" height="19" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Delete</span>
                            </div>
                            <div onClick={() => { handlePopup("report") }}>
                                <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_124_2225)">
                                        <path d="M8.65381 5.09064C8.80786 4.82447 9.19214 4.82447 9.3462 5.09064L14.3 13.6496C14.4544 13.9163 14.2619 14.25 13.9538 14.25H4.04618C3.73807 14.25 3.54564 13.9163 3.69999 13.6496L8.65381 5.09064ZM9.86543 2.99483C9.48026 2.32954 8.51974 2.32954 8.13457 2.99483L1.61902 14.249C1.23306 14.9156 1.71411 15.75 2.48445 15.75H15.5156C16.2859 15.75 16.7669 14.9156 16.381 14.249L9.86543 2.99483ZM9.75 10.3425C9.75 9.92829 9.41421 9.5925 9 9.5925C8.58579 9.5925 8.25 9.92829 8.25 10.3425V11.8425C8.25 12.2567 8.58579 12.5925 9 12.5925C9.41421 12.5925 9.75 12.2567 9.75 11.8425V10.3425Z" fill="#C9002E" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_124_2225">
                                            <rect width="18" height="18" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>Report</span>
                            </div>
                        </div>}

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam nihil quae impedit aspernatur provident est, ipsum esse adipisci molestias.</p>
                {img.length === 1 ?
                    <div className="jobAskingTopSingleImgWrap">
                        <img src={img[0]} alt="" />
                    </div> :
                    <div className="jobAskingTopImgWrap" >
                        {
                            img.slice(0, 3).map((image, index) => {
                                return <img key={index} src={image} />
                            })

                        }
                        {
                            img.length > 3 && <span>{`+${img.length - 3} more`}</span>
                        }
                    </div>
                }


            </div>
            {hireMe === "true" && <div className="jobAskingHireMeContainer">
                <span>$12 / Hour</span>
                <button>Hire Me</button>
            </div>
            }

            <div className="jobAskingBottom">
               {!preview && <div>
                    <div className="jobAskingBottomCommentImageWrap">
                        <img src={pic} className="jobAskingBottomCommentImage" alt="" />
                        {userImgs.map((img, idx) => (
                            <img
                                key={idx}
                                src={pic}
                                className="jobAskingBottomCommentImage"
                                style={{ zIndex: userImgs.length + idx, left: -(8 + 5 * idx) + 'px' }}
                            />
                        ))}
                    </div>
                    <span>3 Comments</span>
                    <span className="jobAskingBottomCommentBorder"></span>

                </div>}
                <div className="jobAskingBottomSvgWrap">
                    <svg onClick={() => setOpenComment(!openComment)} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00016 13.6663H1.60016C1.26683 13.6663 0.933496 13.4663 0.733496 13.1997C0.533496 12.933 0.533496 12.533 0.733496 12.1997L1.46683 10.6663C0.733496 9.53301 0.333496 8.33301 0.333496 6.99967C0.333496 3.33301 3.3335 0.333008 7.00016 0.333008C10.6668 0.333008 13.6668 3.33301 13.6668 6.99967C13.6668 10.6663 10.6668 13.6663 7.00016 13.6663ZM1.9335 12.733C1.86683 12.7997 1.86683 12.7997 1.9335 12.733V12.733ZM2.06683 12.333H7.00016C9.9335 12.333 12.3335 9.93301 12.3335 6.99967C12.3335 4.06634 9.9335 1.66634 7.00016 1.66634C4.06683 1.66634 1.66683 4.06634 1.66683 6.99967C1.66683 8.06634 2.00016 9.13301 2.60016 10.0663C2.80016 10.333 2.86683 10.733 2.66683 11.0663L2.06683 12.333Z" fill="#020F1E" />
                    </svg>
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 9.71968C9.49333 9.71968 9.04 9.91967 8.69333 10.233L3.94 7.46634C3.97333 7.31301 4 7.15967 4 6.99967C4 6.83967 3.97333 6.68634 3.94 6.53301L8.64 3.79301C9 4.12634 9.47333 4.33301 10 4.33301C11.1067 4.33301 12 3.43967 12 2.33301C12 1.22634 11.1067 0.333008 10 0.333008C8.89333 0.333008 8 1.22634 8 2.33301C8 2.49301 8.02667 2.64634 8.06 2.79967L3.36 5.53967C3 5.20634 2.52667 4.99967 2 4.99967C0.893333 4.99967 0 5.89301 0 6.99967C0 8.10634 0.893333 8.99967 2 8.99967C2.52667 8.99967 3 8.79301 3.36 8.45967L8.10667 11.233C8.07333 11.373 8.05333 11.5197 8.05333 11.6663C8.05333 12.7397 8.92667 13.613 10 13.613C11.0733 13.613 11.9467 12.7397 11.9467 11.6663C11.9467 10.593 11.0733 9.71968 10 9.71968ZM10 1.66634C10.3667 1.66634 10.6667 1.96634 10.6667 2.33301C10.6667 2.69967 10.3667 2.99967 10 2.99967C9.63333 2.99967 9.33333 2.69967 9.33333 2.33301C9.33333 1.96634 9.63333 1.66634 10 1.66634ZM2 7.66634C1.63333 7.66634 1.33333 7.36634 1.33333 6.99967C1.33333 6.63301 1.63333 6.33301 2 6.33301C2.36667 6.33301 2.66667 6.63301 2.66667 6.99967C2.66667 7.36634 2.36667 7.66634 2 7.66634ZM10 12.3463C9.63333 12.3463 9.33333 12.0463 9.33333 11.6797C9.33333 11.313 9.63333 11.013 10 11.013C10.3667 11.013 10.6667 11.313 10.6667 11.6797C10.6667 12.0463 10.3667 12.3463 10 12.3463Z" fill="#020F1E" />
                    </svg>
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666504 2.99967C0.666504 1.52691 1.86041 0.333008 3.33317 0.333008H8.6665C10.1392 0.333008 11.3332 1.52691 11.3332 2.99967V12.3709C11.3332 13.4554 10.1074 14.0862 9.22484 13.4559L5.99984 11.1523L2.77482 13.4559C1.89233 14.0862 0.666504 13.4554 0.666504 12.3709V2.99967ZM3.33317 1.66634C2.59679 1.66634 1.99984 2.26329 1.99984 2.99967V12.3709L5.22484 10.0673C5.68844 9.73614 6.31124 9.73614 6.77484 10.0673L9.99984 12.3709V2.99967C9.99984 2.26329 9.4029 1.66634 8.6665 1.66634H3.33317Z" fill="#020F1E" />
                    </svg>
                </div>
                <span>31 mins</span>
            </div>

            {openComment && !preview &&
                <div className="jobAskingCommentBox">
                    <div className="jobAskingCommmentText">
                        <img src={pic} alt="" />
                        <Textarea
                            className="jobAskingCommentTextArea"
                            maxRows="10"
                            placeholder="Write a comment"
                            style={{ outline: "none", resize: "none", width: "100%" }}
                        />
                    </div>
                    <div className="jobAskingSingleComment">
                        <img src={pic} alt="" />
                        <div className="jobAskingSingleCommentRight">
                            <div className="jobAskingSingleCommentRightTop">
                                <div>
                                    <span>Devsn Lane</span>
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 10.7916V8.24062C0 8.1854 0.0447714 8.14062 0.0999999 8.14062H2.65095C2.70617 8.14062 2.75095 8.1854 2.75095 8.24062V10.7916C2.75095 10.8468 2.70617 10.8916 2.65095 10.8916H0.1C0.0447715 10.8916 0 10.8468 0 10.7916Z" fill="#58BCF8" />
                                        <path d="M5.13629 7.52611L2.8302 5.67501C2.74654 5.60786 2.81296 5.474 2.91704 5.50002L5.17044 6.06323C5.20451 6.07174 5.24055 6.06176 5.26539 6.03693L7.87181 3.43083C7.95806 3.34459 8.09424 3.45848 8.02462 3.55863L5.281 7.50521C5.24793 7.55278 5.18147 7.56238 5.13629 7.52611Z" fill="#72BAF3" />
                                        <path d="M4.00866 2.29445C2.36958 2.29444 2.36917 4.9963 2.36917 6.61736L0.183424 6.61723C-0.253773 1.42973 2.55158 0.133027 4.0089 0.13311C10.1297 -0.731473 10.9439 2.81585 11.1135 4.9963C11.66 12.021 4.00907 10.9401 4.00907 10.9401V8.23845C6.19506 8.23845 6.74173 8.77868 8.38105 7.15772C8.56322 6.61731 8.81825 5.6447 8.38105 3.91553C7.83455 1.75407 6.19465 2.29447 4.00866 2.29445Z" fill="#72BAF3" />
                                    </svg>
                                </div>
                                <span>Education Consultant</span>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus dolorum laboriosam, voluptates asperiores modi!</p>
                            <div className="jobAskingSingleCommentButtons">
                                <div>
                                    <img src={fb} alt="" />
                                    <span>Like</span>
                                </div>
                                <div>
                                    <img src={arrow} alt="" />
                                    <span>Reply</span>
                                </div>
                                <span>
                                    |
                                </span>
                                <img src={wp} alt="" />
                                <img src={call} alt="" />

                            </div>
                        </div>
                    </div>
                </div>}
        </div>

    )
}
