import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";
import axios from "axios";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log("event.target.elements");

    console.log(event.target.elements);
    console.log("password",password.value);

    axios.post("http://localhost:3000/addUser",{email:email.value,password:password.value}).then(res => {
      console.log("response");
      
      console.log(res);
    });

    try {
      await app.auth().createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);


 


  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit" >Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);
