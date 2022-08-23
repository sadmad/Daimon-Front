import SidebarMenu from "react-bootstrap-sidebar-menu";
import LoginIcon from "@mui/icons-material/Login";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import StorageIcon from "@mui/icons-material/Storage";
import BiotechIcon from "@mui/icons-material/Biotech";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Link } from "react-router-dom";
import React, { Component } from "react";


const Sidebar = () => {
  return (
    <>
      <SidebarMenu>
  <SidebarMenu.Header>
    <SidebarMenu.Brand>
      {/* Your brand icon */}
    </SidebarMenu.Brand>
    <SidebarMenu.Toggle />
  </SidebarMenu.Header>
  <SidebarMenu.Body>
    <SidebarMenu.Nav>
      <SidebarMenu.Nav.Link>
        <SidebarMenu.Nav.Icon>
          {/* Menu item icon */}
        </SidebarMenu.Nav.Icon>
        <SidebarMenu.Nav.Title>
          {/* Menu item title */}
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Nav.Link>
    <SidebarMenu.Nav/>
    <SidebarMenu.Sub>
      <SidebarMenu.Sub.Toggle>
        <SidebarMenu.Nav.Icon />
        <SidebarMenu.Nav.Title>
          {/* Submenu title */}
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Sub.Toggle>
      <SidebarMenu.Sub.Collapse>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link>
            <SidebarMenu.Nav.Icon>
              {/* Submenu item icon */}
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>
              {/* Submenu item title */}
            </SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
      </SidebarMenu.Sub.Collapse>
    </SidebarMenu.Sub>
  <SidebarMenu.Body/>
</SidebarMenu>
      {/* 
    <div className="sidebar col-sm-2">
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
    */}
    </>
  );
};

export default Sidebar;
