import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{


  const {resId}=useParams();

  const resInfo=useRestaurantMenu(resId);

 

  if(resInfo===null)return <Shimmer/>;

  const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
  
  const {itemCards}=resInfo?.cards[2].groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(resInfo?.cards[2].groupedCard.cardGroupMap?.REGULAR?.cards);

  const categories=resInfo?.cards[2].groupedCard.cardGroupMap?.REGULAR?.cards.filter(c=>
    c.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(" , ")} - {costForTwoMessage}</p>
      {categories.map((category)=><RestaurantCategory key ={category?.card?.card?.title} data={category?.card?.card}/>)}
    </div>
  );
};

export default RestaurantMenu;