import { useState } from "react";
import ItemList from "./ItemList";


//RestaurantCategory Is controlled component brcause it is controlling by the RestaurentMenu when RestaurentCategory have its own state like showItems then it is called uncontrolled component

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//   const [showItems, setshowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
//     //    setshowItems(true);
//     setshowItems(!showItems); //!showItems this works similar to the toggle function
  };
  return (
    <div>
      {/* Accordion Header */}

      <div className="w-6/12 m-auto mx-auto my-4S bg-gray-80 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">⬇️</span>
        </div>
        {showItems && <ItemList Items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
