import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

  // this is to show the use of useState from dummy data that we created
  // const [listOfRestaurants,setListOfRestaurants]=useState([
  //   {
  //     data: {
  //       id: '121603',
  //       name: 'Kannur Food Point',
  //       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
  //       cuisines: ['Kerala', 'Chinese'],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: '3.9',
  //     },
  //   },
  //   {
  //     data: {
  //       id: '121604',
  //       name: 'Dominoes',
  //       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
  //       cuisines: ['Kerala', 'Chinese'],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: '4.5',
  //     },
  //   },
  //   {
  //     data: {
  //       id: '121605',
  //       name: 'KFC',
  //       cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
  //       cuisines: ['Kerala', 'Chinese'],
  //       costForTwo: 30000,
  //       deliveryTime: 24,
  //       avgRating: '4.1',
  //     },
  //   },
  // ]);

  const [listOfRestaurants,setListOfRestaurants]=useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
         className="filter-btn"
         onClick={()=>{
          // filter logic
          const filteredList=listOfRestaurants.filter(
            (res)=>res.data.avgRating>4
          );
          setListOfRestaurants(filteredList);
         }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">

        {/* <RestaurantCard 
         resData={resList[0]}
         />
        <RestaurantCard
         resData={resList[1]} 
        />
 */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
  
      </div>
    </div>
  );
};

export default Body;