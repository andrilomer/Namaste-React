import { useState,useEffect } from "react";


const User =(props)=>{

  const [count]=useState(0);
  const [count2]=useState(1);

  useEffect(()=>{

  },[]);


  return (
  <div  className="user-card">

    <h1>Count ={count}</h1>
    <h1>Count2={count2}</h1>
    <h2>Name:{props.name}</h2>
    <h3>Location:Delhi</h3>
    <h4>Contact: andril44</h4>

  </div>
  );

};

export default User



