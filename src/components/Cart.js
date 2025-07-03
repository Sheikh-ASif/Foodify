import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart =() => {
// subscribing or accessing the the appstore inside the my cart 
    const cartItems = useSelector((store) => store.cart.items);

    // const store = useSelector((store) => store);
    // const cartItems = store.cart.items;
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center p-4 m-4 ">
            <h1 className="font-bold text-2xl border-s-indigo-300 shadow-lg p-2">
                This is the Cart
            </h1>
            <div className="w-6/12 m-auto p-4 shadow-lg">
            <buuton className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
            onClick={() => dispatch(handleClearCart)}>
                Clear Cart
            </buuton>
            {cartItems.length === 0 && <h1 className="m-4 p-4">Cart is Empty, Add items to the cart</h1>}
                <ItemList Items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;