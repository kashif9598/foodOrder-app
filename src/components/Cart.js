import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return cartItems.length === 0 ? (
    <h1 className="mx-auto mt-2 w-6/12 bg-slate-100 p-3 text-center">No Items added in cart</h1>
  ) : (
    <div className="mx-auto mt-2 w-6/12 bg-slate-100 p-3">
      <h1 className="text-2xl text-center pb-4">Cart</h1>
      <button className="px-2 my-1 bg-gray-500 rounded-md" onClick={handleClearCart}>Clear Cart</button>
      <ItemList items={cartItems} />
    </div>
  );
};

export default Cart;
