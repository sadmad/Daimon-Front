import "./Login.css";
import Form from "./Form";
import { useState } from "react";

const Login = () => {
  //const isLogin = false;

  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json", Accept: "application/json" },
  //   body: JSON.stringify(item),
  // };

  // async function tockenHandler() {
  //   const responce = await fetch("http://localhost:5000/login", requestOptions);
  //   const data = await responce.json();
  // }
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [logInStatus, setlogInStatus] = useState("");

  const resultIllustrator = (resultOfLogin) => {
    const loginData = resultOfLogin;
    if (loginData.status === 200) {
      setIsLogedIn(true);
    } else if (loginData.status === 422) {
      setlogInStatus(loginData.message);
    }
    console.log(logInStatus);
  };

  return (
    <div className="Login">
      <div className="logoContainer">
            <img
              alt="tu-logo"
              className="TUCLogo"
              src="https://www.presse.tu-clausthal.de/fileadmin/_processed_/c/3/csm_Logo_EN_gr%C3%BCn_404735dda6.jpg"
            />
          </div>
      {isLogedIn ? (
        <div className="loged-in">Your log in was successful!</div>
      ) : logInStatus ?(
          <div className="formContainer">
            <Form onLogin={resultIllustrator} />
            <p>{logInStatus}</p>
            
          </div>
      ) : (
        <div className="formContainer">
            <Form onLogin={resultIllustrator} />
            
          </div>
      )}
    </div>
  );
};

export default Login;