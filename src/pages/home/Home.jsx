import Carousel from "react-bootstrap/Carousel";
import Slide from "./slides/Slide";
import Nav from "./topbar/Nav";
import Blocks from "./fist-containers/Twoblock";
import SecBlocks from "./3block/secBlock";
import ReactDOM from "react-dom";
import "./Home.css";
import Login from "./login/Login";
import { useState } from "react";

const Home = () => {

  const [showLogin, setDisplayForm] = useState(false);
  const loginFormIlustrator = (formDisplay)=> {
    setDisplayForm(current => !current);
  };

  return (
    <>
      <main className="p-3 mb-2 bg-dark text-white w-100 p-3 mw-100">
        <Nav formDisplay={loginFormIlustrator} />
        <Slide />
        <Blocks />
        <SecBlocks/>
        {showLogin ? <Login></Login> : ""}
      </main>
      <footer className="pt-3 mt-4 text-muted border-top">
        &copy; TU Cluasthal 2022
      </footer>
    </>
  );
}

export default Home;
