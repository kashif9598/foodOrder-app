import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header flex items-center justify-between bg-orange-200 p-3">
      <div className="logo-container w-20">
        <img className="logo" src={LOGO_URL} />
        <h1>TWIGGY</h1>
      </div>
      <div className="nav-items">
        <ul className="flex">
          <li className="p-2">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="p-2 text-xl font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 text-xl font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 text-xl font-bold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 text-xl font-bold">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 text-xl font-bold">
            <Link to="/cart">Cart - {`(${cartItems.length})`}</Link>
          </li>
          <button
            className="px-2 my-1 bg-gray-500 rounded-md"
            onClick={() => {
              setLoggedIn(!loggedIn);
            }}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
          <li className="p-2 text-xl font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
