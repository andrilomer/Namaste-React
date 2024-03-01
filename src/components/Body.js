import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurants,setListOfRestaurants]=useState([]);
  const [filteredRestaurant,setFilteredRestaurant]=useState([]);

  const [searchText,setSearchText ]=useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData= async()=>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7546419&lng=77.4982037&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
    const json=await data.json();

    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // this is conditional rendering
  // if(listOfRestaurants.length ===0){
  //   return <Shimmer/>;
  // }

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

 
  return listOfRestaurants.length ===0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
           type="text" 
           className="search-box" 
           value={searchText} 
           onChange={(e)=>{ 
            setSearchText(e.target.value); 
           }}/>
          <button onClick={()=>{
            // filter the restaurant cards and update the UI
            // search text
            console.log(searchText);

           const filteredRestaurant= listOfRestaurants.filter(
            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
 
            setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
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

        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
  
      </div>
    </div>
  );
};

export default Body;