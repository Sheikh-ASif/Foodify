import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const{loggedInUser} = useContext(UserContext);


  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    locality,
    areaName,
    sla,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h4>{sla.deliveryTime} min</h4>
      <h4>User: {loggedInUser} </h4>
    </div>
  );
};

//Higher order component

//input - restaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard  {...props} />
      </div>
    );
  };
};


export default RestaurantCard;
