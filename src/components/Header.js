import { CDN_URL, LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


// import useTheme from "./utils/useTheme";

const Header = () => {
  const [BtnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);

  //subscribing the store using the selector
 const cartItems = useSelector((store) => store.cart.items); 
//  console.log("Cart Items:", cartItems);

  

// console.log("Cart Items:", cartItems);
  // const { theme, toggleTheme } = useTheme();

  //1-when there is no dependencies array in the useeffect as a argument then the header component rerender every time when we render the component of the header or whatever the compinent is

  //2- when there is an array dependencie in the useEffect= [] then its only render the header component not the now it will (useEfect)not be called again and again when the header renderd

  //3- when there is something in the array dwpwncies then its depend on the value of that array every time the value of the [BtnNameReact] changes the useEffect is called or renderd

  useEffect(() => {
    // console.log("useEffeect called");
  }, [BtnNameReact]);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg  mb-2">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-2 ">
          <li className="px-4">
            online Status:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4  font-bold">
            <Link to="/cart">
            ({cartItems.length} items) - 🛒
            </Link>
          </li>
          <li className="px-4">
            <Link to="/profile">Profile</Link>
          </li>
          <button
            className="cursor-pointer"
            onClick={() => {
              BtnNameReact === "Login" //? this means then
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login"); // : this means and
              // setBtnNameReact("Logout");
              // console.log(BtnNameReact);
            }}
          >
            {BtnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;




// use this after the cart
//  {/* <li  onClick={toggleTheme} style={{ cursor: "pointer"}}>
//             themes: {"🌗" === "light" ? "🌗" : "🌗"}
//           </li> */}
//            {/* <li>
//            Themes:{Themes ? "dark":"light"}
//           </li> */}