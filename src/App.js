import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Train from "./pages/train/Train";
import React, { Component } from "react";

function App() {
  console.log("status: ", sessionStorage.getItem("login"));
  return (
    <>
      {!sessionStorage.getItem("login") ? (
        <Home />
      ) : (
        <Router>
          <Topbar />
          <div className="row">
            <Sidebar />
            <div className="col-sm-10">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/training" element={<Train />} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
