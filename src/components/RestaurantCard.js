import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

  const {resData}=props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    // deliveryTime,
  } = resData?.info;

  // console.log(props);
  return (
    <div className="m-4 p-4 w-[255px] bg-gray-100 rounded-lg hover:bg-blue-100">
      <img 
       className="rounded-lg"
       alt="res-logo"
       src={ CDN_URL +
       cloudinaryImageId}
       /> 
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

//Higher order component

// input -RestaurantCard=> RestaurantCardVeg

export const withVegLabel= (RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-gray-700 text-white ml-4 p-3 mt-2 rounded-lg" >Veg</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};


export default RestaurantCard;