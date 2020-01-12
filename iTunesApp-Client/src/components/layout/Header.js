import React from "react";
import app from '../../base'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>iTunes Search</h1>

      <img
        style={imageStyle}
        src={
          "https://affiliate.itunes.apple.com/resources/wp-content/uploads/2018/09/affiliate-lockup.png"
        }
      ></img>
      <div style={{textAlign:"end"}}>
            <button className="btn btn-danger" onClick={() => app.auth().signOut().then(function(){console.log("sign out")}).catch(function(error){console.log(error)})}>Sign out</button>
            </div>
    </header>
    
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
  marginBottom: "20px"
};
const imageStyle = {
  maxWidth: "10%",
  height: "auto"
};

//   const linkStyle={
//       color:'#fff',
//       textDecoration:'none'

//   }
