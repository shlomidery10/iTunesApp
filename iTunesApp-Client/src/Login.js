import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import UserTable from "./components/UserTable";
import RegisterUsers from './components/RegisterUsers'


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
 
 

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Login Page</h1>
      <form style={{height:"100%",textAlign:"center"}} onSubmit={handleLogin}>
      <div className="form-group">

        <label>
          

          <input name="email" type="email" placeholder="Email" />
        </label>
        </div>
        <div className="form-group">

        <label>
          <input name="password" type="password" placeholder="Password" />
        </label>
        </div>
        <div className="form-group">

        <button className="btn btn-success" type="submit">Login</button>
</div>
      </form>
      <RegisterUsers></RegisterUsers>
      <UserTable></UserTable>
    </div>
  );
};
 
export default withRouter(Login);
