import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Group } from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import {Users} from "../../dummyData";
import CloseFriend from "../CloseFriend/CloseFriend";




export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sideWrapper">
        <ul className="sidebarList">
          <li className="sidebarList">
             <RssFeedIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarList">
             <ChatIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarList">
             <PersonalVideoIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarList">
             <GroupsIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarList">
             <BookmarkIcon className="sidebarIcon"/>
             <span className="ssidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarList">
             <QuestionMarkIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Question</span>
          </li>
          <li className="sidebarList">
             <WorkOutlineRoundedIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarList">
             <EventNoteRoundedIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarList">
             <EventNoteRoundedIcon className="sidebarIcon"/>
             <span className="sidebarListItemText">courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          {Users.map((u) => (
          <CloseFriend key={u.id} user={u}/>
          ))}
           </ul>
          
      </div>
    </div>
  )
}
