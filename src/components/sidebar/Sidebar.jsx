import SidebarMenu from "react-bootstrap-sidebar-menu";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import './Sidebar.css';


const Sidebar = () => {
  return (
    <>
      <div className='sidebar col-sm-2'style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Functions
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink exact to="/" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="home">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/training" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="sitemap">Train</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/testing" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="chart-bar">Evaluation</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="hdd">Backup</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="database">Logs</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
             &copy; TU Cluasthal 2022
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
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
