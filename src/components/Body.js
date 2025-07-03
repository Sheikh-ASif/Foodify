import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]); //useState(resList);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); 

  // console.log("body renderd",ListOfRestaurants);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9120595&lng=80.960845&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    //optional chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like your offline!! kindely check your internet connectivity;
      </h1>
    );

    const {loggedInUser, setUserName} = useContext(UserContext);

  //conditional rendering
  // if(ListOfRestaurants.length === 0) {
  //   return <Shimmer/>;
  // };
  // return ListOfRestaurants.length === 0 ? <Shimmer/> : (this is the ternary oprater )

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className=" border border-solid border-black rounded-lg "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-1.8 bg-green-100 m-4 cursor-pointer rounded-lg"
            onClick={() => {
              const filteredRestaurants = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div  className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-1.8 bg-gray-100 rounded-lg cursor-pointer"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setfilteredRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div  className="search m-4 p-4 flex items-center">
          <label>UserName:  </label>
          <input className=" border border-solid border-black rounded-lg pl-2 " 
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>

 { restaurant.info.promoted ? ( <RestaurantCardPromoted  resData={restaurant}/>) : (<RestaurantCard resData={restaurant} /> 
             )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
