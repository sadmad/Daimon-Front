import { useState } from "react";
import './Form.css';

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const[isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      mode: "cors",
      body: formData,
    });
    result = await result.json();
    props.onLogin(result);
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (<div className="load">Loadding...</div>): (
        <form className="loginForm" onSubmit={submitHandler}>
        <label>
          Email
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            name="pass"
            onChange={(p) => setPass(p.target.value)}
          />
        </label>
        <input className="formButton" type="submit" value="Log In" />
      </form>
      )}
      
    </>
  );
};

export default Form;
