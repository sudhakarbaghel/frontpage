import { useRef, useState } from "react";
import "./dragAndUpload.scss"
import upload from "../../assets/upload.svg"

export default function DragAndUpload(props) {
    const [image, setImage] = useState(null);
    const [presetImage, setPresetImage] = useState(null);
    const [dragging, setDragging] = useState(false);
    const dropRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setImage(file);
        setDragging(false);
        props.setPic(URL.createObjectURL(file))

    }

    const handleDrag = (e) => {
        e.preventDefault();
        setDragging(true);
    }

    const handleDragExit = (e) => {
        e.preventDefault();
        setDragging(false);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        props.setPic(URL.createObjectURL(file))
    }

    return (
        <div className="dragAndUpload">
            <label
                htmlFor="dragAndUpload"
                ref={dropRef}
                onDragOver={handleDrag}
                onDragLeave={handleDragExit}
                className="dragAndUploadAreaWrap"
                onDrop={handleDrop}
                style={{
                    backgroundColor: dragging ? '#bdc9fb' : 'white',
                    scale: dragging ? '1.1' : '1',
                    border: '1px dashed #C6C6C6',
                    borderRadius: '4px',
                }}
            >
                {!(image || presetImage) &&
                    <div className="dragAndUploadArea">
                        <div className="dragAndUploadAreaTop">
                            <img src={upload} alt="" />
                            <span>Choose file</span>
                        </div>
                        <span>Upload to see Preview</span>
                    </div>}
                {(image || presetImage) ? <img className="dragAndUploadImg" src={presetImage || URL.createObjectURL(image)} alt="Uploaded" /> : null}
            </label>
            <input type="file" id="dragAndUpload" onChange={handleFileChange} style={{ display: "none" }} />
            {!(props.button === "false") &&
                <div className="dragAndUploadPresets">
                    <span>
                        Presets
                    </span>
                    <div className="dragAndUploadPrestsImgWrapper">

                        <img onClick={(e) => { setPresetImage(e.target.src); props.setPic(e.target.src) }} src="https://images.pexels.com/photos/10627367/pexels-photo-10627367.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                        <img onClick={(e) => { setPresetImage(e.target.src); props.setPic(e.target.src) }} src="https://images.pexels.com/photos/13855927/pexels-photo-13855927.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                        <img onClick={(e) => { setPresetImage(e.target.src); props.setPic(e.target.src) }} src="https://images.pexels.com/photos/6178714/pexels-photo-6178714.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                        <img onClick={(e) => { setPresetImage(e.target.src); props.setPic(e.target.src) }} src="https://images.pexels.com/photos/11511517/pexels-photo-11511517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                        <img onClick={(e) => { setPresetImage(e.target.src); props.setPic(e.target.src) }} src="https://images.pexels.com/photos/12594849/pexels-photo-12594849.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                        <img onClick={(e) => { setPresetImage(e.target.src); props.setPic(e.target.src) }} src="https://images.pexels.com/photos/14612872/pexels-photo-14612872.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
                    </div>
                     
                        <div className="dragAndUploadButtons">
                            <button className="dragAndUploadFirstBtn" onClick={() => props.setShowPopUp(false)}>Cancel</button>
                            <button className="dragAndUploadSecBtn" onClick={() => props.setShowPopUp(false)}>Save</button>
                        </div>
                </div>}
        </div>
    );
}
