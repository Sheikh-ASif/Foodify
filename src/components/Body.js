import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9120595&lng=80.960845&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurants =
        json?.data?.cards?.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setListOfRestaurants(restaurants);
      setfilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      setListOfRestaurants([]);
      setfilteredRestaurants([]);
    }
  };

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline! Kindly check your internet connectivity.</h1>
    );

  if (!filteredRestaurants || filteredRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex flex-wrap">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1.8 bg-green-100 m-4 cursor-pointer rounded-lg"
            onClick={() => {
              const filtered = ListOfRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1.8 bg-gray-100 rounded-lg cursor-pointer"
            onClick={() => {
              const topRated = ListOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4.4
              );
              setfilteredRestaurants(topRated);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>UserName:&nbsp;</label>
          <input
            className="border border-solid border-black rounded-lg pl-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
