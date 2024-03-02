import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";

const Header= () => {
  // let btnName="LogIn";
  console.log("Header rendered");

  const[btnNameReact,setbtnNameReact]=useState("LogIn");

  useEffect(()=>{
    console.log("useEffect is called");
  },[btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="Login" onClick={ ()=>{
           btnNameReact===("LogIn") 
           ? setbtnNameReact("LogOut")
           : setbtnNameReact("LogIn");
            }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;