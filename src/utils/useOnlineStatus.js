import { useEffect, useState } from "react";


const useOnlineStatus =()=>{

  const [onLineStatus,setOnlineStatus]=useState(true);


  // check if online

  useEffect(()=>{
    window.addEventListener("offline",()=>{
      setOnlineStatus(false);
    });

    window.addEventListener("online",()=>{
      setOnlineStatus(true);
    });

  },[]);


  //boolean
  return onLineStatus;
};

export default useOnlineStatus;