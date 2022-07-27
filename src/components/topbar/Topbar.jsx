import "./topbar.css";
import Search from '@mui/icons-material/Search';
import Person from '@mui/icons-material/Person';
import Chat from "@mui/icons-material/Chat";
import Notifications from '@mui/icons-material/Notifications';
export default function Topbar() {
  return  <div className="topbarContainer">
    <div className="topbarLeft">
      <span className="logo">Lamasocial</span>
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <Search className="searchIcon"/>
        <input placeholder="Search for friends, post or videos" className="searchInput"/>

      </div>
    </div>
    <div className="topbarRight">
      <div className="topbarlink">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
    </div>
    <div className="topbarIcons">
      <div className="topbarIconsItem">
      <span className="topbarIconBadge">1</span>

     <Person/>

      </div>
      <div className="topbarIconsItem">
      <span className="topbarIconBadge">2</span>

     <Chat/>

      </div>
      <div className="topbarIconsItem">
      <span className="topbarIconBadge">3</span>

     <Notifications/>
    </div>
      </div>

      <img src="/assets/Person/1.jpeg" alt="" className="topbarImg"/>
    </div>


    
    </div>;
}
