import "./Topbar.css";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import avatar from '../../images/av.png';
import logo from '../../images/download.png';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWraper">
        <div className="topLeft">
          <img alt="logo" src={logo} className="logo" />        
          </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNoneIcon />

            <span className="topIconBag">2+</span>
          </div>

          <div className="topbarIconsContainer">
            <LanguageIcon />
          </div>

          <div className="topbarIconsContainer">
            <SettingsIcon />
          </div>
          <img alt='avatar' src={avatar} className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
