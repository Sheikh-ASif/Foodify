import { useParams } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);

  const resinfo = useRestrauntMenu(resId);
  // console.log(resinfo);

  const [showIndex, setShowIndex] = useState(null);

  // Show shimmer effect while data is loading
  if (resinfo === null) return <Shimmer />;

  // Extract restaurant details safely

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[2]?.card?.card?.info || {};
  // console.log(name, cuisines, costForTwoMessage);
  // console.log(resinfo?.cards[2]?.card?.card?.info );

  // Extract menu items safely

  const itemCards =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];
  //console.log(resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      {/* //Accordiaon for categories */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex = {()=> setShowIndex(index)}
        />
      ))}
    </div>
  );
};

{
  /* instead of writting to display all the 22 itemCards you simply use the map function to reduce the lenthy code */
}
{
  /* <li>{itemCards[0].card.info.name}</li>
      <li>{itemCards[1].card.info.name}</li>
      <li>{itemCards[2].card.info.name}</li>
      <li>{itemCards[3].card.info.name}</li> */
}
{
  /* <li>Burgers</li>
      <li>ColdDrink's</li> */
}

export default RestaurantMenu;
