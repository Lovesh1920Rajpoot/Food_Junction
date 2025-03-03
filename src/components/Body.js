import Restaurantcards from "./Restaurantcards";
import {  useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([])
  const [searchText, setSearchText]= useState("");
  const [filteredRestaurant, setFilteredReastaurant]= useState([])
  useEffect(()=>{
    fetchdata();  
  },[]);
  
  const fetchdata = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredReastaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  

    return listOfRestaurant.length ===0 ? (<Shimmer/>) : (
      <div className="body">
        <div className="filter flex" >
            <button className="filter-btn p-2 m-2 border-black border-solid bg-gray-200" onClick={()=>{
               const filteredlist= listOfRestaurant.filter((res)=> res?.info?.avgRating > 4
            );
            setListOfRestaurant(filteredlist);
            }}>Top Rated Restaurant</button> 
        
        <div className="search p-2 m-2">
        <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-200 m-2 rounded-md"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredReastaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>  
    </div>
        
        <div className="flex flex-wrap">
    
          {filteredRestaurant.map((Restaurant) => (
           <Link key={Restaurant?.info?.id}
            to = {"Restaurant/"+Restaurant?.info?.id}>
            <Restaurantcards  details ={Restaurant}/>
            </Link>
            ))}
          
        </div>
      </div>
    )
    }

export default Body;
