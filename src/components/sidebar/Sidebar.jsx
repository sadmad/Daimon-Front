import "./Sidebar.css";
import LoginIcon from "@mui/icons-material/Login";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import StorageIcon from "@mui/icons-material/Storage";
import BiotechIcon from "@mui/icons-material/Biotech";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Functionality</h3>
          <ul className="sidebarList">
            <Link className="link" to='/'>   
              <li className="sidebarListItem">
                <LoginIcon className="sidebarIcon" />
                Log In
              </li>
            </Link>
            <Link className="link" to="/training">
              <li className="sidebarListItem">
                <ModelTrainingIcon className="sidebarIcon" /> Train
              </li>
            </Link>
            <li className="sidebarListItem">
              <StorageIcon className="sidebarIcon" /> Logs
            </li>
            <li className="sidebarListItem">
              <BiotechIcon className="sidebarIcon" /> Test
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Saved Data</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FilePresentIcon className="sidebarIcon" />
              Your Trained Models
            </li>
            <li className="sidebarListItem">
              <AssignmentTurnedInIcon className="sidebarIcon" /> Your Tested
              Models
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
