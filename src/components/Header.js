import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header= () => {
  // let btnName="LogIn";
  console.log("Header rendered");

  const[btnNameReact,setbtnNameReact]=useState("LogIn");

  // this use effect was to illustrate how useEffect hook works
  // useEffect(()=>{
  //   console.log("useEffect is called");
  // },[btnNameReact]);

  const onLineStatus=useOnlineStatus();



  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4"> 
          <li className="px-4">
            Online Status:{onLineStatus? "✅":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
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