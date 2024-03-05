import Shimmer from "./Shimmer";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu=()=>{

  const [resInfo,setResInfo]=useState(null);

  // const params=useParams();
  // console.log(params);

  const {resId}=useParams();
  // console.log(resId);


  useEffect(()=>{
    fetchMenu();
  },[]);

  const fetchMenu= async () => {
    const data=await fetch(MENU_API+resId);
    const json=await data.json();

    console.log(json.data);
    setResInfo(json.data);
  };

  // console.log(resInfo?.cards[0]?.card?.card?.info.name);

  // cant figure out why i cant destructure on the fly
  //solved

  if(resInfo===null)return <Shimmer/>;

  const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
  
  const {itemCards}=resInfo?.cards[2].groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
       {itemCards.map((item)=>( 
        <li key={item.card.info.id}>{ item.card.info.name}</li>
       ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;