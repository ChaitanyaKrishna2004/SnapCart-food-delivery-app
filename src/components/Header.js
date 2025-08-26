import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const OnlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using a selector.
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between items-center bg-blue-200">
      <div className="flex items-center">
        <img className="w-40 px-4 py-4" src={LOGO_URL} alt="logo" />
        <div className="nav-items">
          <ul className="flex justify-center px-75">
            <li className="px-4">
              OnlineStatus : {OnlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} /> ({cartItems.length}{" "}
                items)
              </Link>
            </li>
            <li className="px-4">
              <button
                className="Login cursor-pointer"
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}
              >
                {btnNameReact}
              </button>
            </li>
            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
