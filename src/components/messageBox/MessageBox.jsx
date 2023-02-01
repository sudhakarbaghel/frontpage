import "./messageBox.scss"
import pic from "../../assets/pic.svg"
import dot from "../../assets/dot.svg"
import threedots from "../../assets/threedots.svg"
import doubletick from "../../assets/messageDoubleTick.svg"
import send from "../../assets/send.svg"
import Textarea from 'react-textarea-autosize';
import { useState } from "react"

export default function MessageBox() {
    const[message,setMessage]=useState("")
    return (
        <div className="messageBox">
            <span>Chats</span>
            <div className="messageBoxTop">
                <div className="messageBoximageWrapper">
                    <div>
                        <img src={pic} alt="" />
                        <img className="messageBoxdot" src={dot} alt="" />
                    </div>
                    <span>Max Mayfield</span>
                    <img src={threedots} alt="" />
                </div>
            </div>
            <div className="messageBoxCenter">
                <span>Today</span>
                <div className="messageBoxCenterMessagesWrap">
                    <span className="messageBoxCenterMessages">
                        Hello Shashank
                    </span>
                    <span className="messageBoxCenterMessages">
                        I want a website for my buisness
                    </span>
                    <div className="messsageBoxCenterTime">
                        <span>10:30 AM</span>
                        <img src={doubletick} alt="" />
                    </div>
                </div>
                <div className="messageBoxCenterType">
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        maxRows="10"
                        placeholder="Type your message"
                        className="messageBoxCenterInput"
                        style={{ border: "none", outline: "none", resize: "none", width: "100%"}}
                    />
                    <img style={{cursor:"pointer"}} src={send} alt="" />
                </div>
            </div>
        </div>
    )
}
