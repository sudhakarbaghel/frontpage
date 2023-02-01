import { useRef, useState } from "react";
import "./createPostCenter.scss"
import plus from "../../assets/Plus_circle.svg"
import DragAndUpload from "../../components/dragAndUpload/DragAndUpload"


export default function CreatePostCenter({props}) {
    
    return (
        <div className="createPostCenter">
            <div className="createPostCenterItem">
                <div className="createPostCenterItemTop">
                    <span>
                        Hi, Create your post
                    </span>
                    <p>
                        Amet minim molit non deserunt ullamco .
                    </p>
                </div>
                <div className="createPostCenterItemBottom">


                    <div className="createPostCenterInputWrap">
                        <div className="createPostCenterInputcontainer">
                            <input autoComplete="off" className="createPostCenterInput" type="text" placeholder=" " />
                            <label className="createPostCenterPlaceholder">Post Title</label>
                        </div>
                        <div className="createPostCenterInputcontainer">
                            <input autoComplete="off" className="createPostCenterInput" type="text" placeholder=" " />
                            <label className="createPostCenterPlaceholder">Categories</label>
                        </div>
                        <div className="createPostCenterInputcontainer">
                            <input autoComplete="off" className="createPostCenterInput" type="text" placeholder=" " />
                            <label className="createPostCenterPlaceholder">Description</label>
                        </div>

                    </div>
                    <div className="createPostCenterAddMedia">
                        <span>Add Media</span>
                  <DragAndUpload button="false"/>
                    </div>
                    <div className="createPostCenterCall">
                        <input type="checkbox" name="" id="" />
                        <span>Add a Call-to-action</span>
                    </div>

                </div>

            </div>
            <div className="createPostCenterButton">
                <button className="createPostCenterButtonFirst">Cancel</button>
                <button className="createPostCenterButtonSec">Publish Post</button>
            </div>

        </div>
    )
}
