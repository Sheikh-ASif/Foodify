import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ Items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    //Dispatch the action to add the item to the cart

    dispatch(addItems(item))
  };
//   console.log(Items);
  return (
    <div>
      {Items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2  flex justify-between text-left ">
          
          <div className="w-9/12">
          <div className="py-2">
            <span>{item.card.info.name}</span>
            <span> - ₹ {item.card.info.price ? item.card.info.price/100 :
             item.card.info.defaultPrice/100 }
             </span>
          </div>
          <p className="text-xs">
            {item.card.info.description}
          </p>
          </div>
          <div className="w-3/12 p-4">
         <div className="absolute">
            {/* Add+ button  */}
         <button className=" cursor-pointer p-2 mx-12 rounded-lg bg-white mt-25 text-black shadow-lg absolute m-auto"
         onClick={() => handleAddItem(item)} 
          >
          Add+
          </button>
         </div>
         <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
