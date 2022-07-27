import { EmojiEmotions, Room } from "@mui/icons-material";
import "./share.css";
import PermMediaRoundedIcon from '@mui/icons-material/PermMediaRounded';
export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
    <div className="shareTop">
        <img className="shareProfileImg" src="/assets/person/1.jpeg" alt=""/>
        <input placeholder="What's in your mind Safak?" className="shareInput"/>
    </div>
    <hr className="shareHr"/>
    <div className="shareBottom">
        <div className="shareOptions">
            <div className="shareOption">
            <PermMediaRoundedIcon htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionText">Photo or Videos</span>

            </div>
            <div className="shareOption">
            <label htmlColor="blue" className="shareIcon"/>
                <span className="shareOptionText">Tag</span>

            </div>
            <div htmlColor="green" className="shareOption">
            <Room className="shareIcon"/>
                <span className="shareOptionText">Location</span>

            </div>
             
            <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                <span className="shareOptionText">Feelings</span>

            </div>
            
        </div>
        <button className="shareButton">Share</button>
    </div>

        </div>
    </div>
  )
}
