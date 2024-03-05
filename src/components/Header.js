import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header= () => {
  // let btnName="LogIn";
  console.log("Header rendered");

  const[btnNameReact,setbtnNameReact]=useState("LogIn");

  // this use effect was to illustrate how useEffect hook works
  // useEffect(()=>{
  //   console.log("useEffect is called");
  // },[btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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