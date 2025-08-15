import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlinestatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const OnlineStatus = useOnlineStatus();
  // if no dependency array => useeffect is called on ever render.
  // if dependency array is empty = [] => useEffect is called on onlyinitial render(just once).
  // if dependency array is empty [btnNameReact] => called evrytime btnNameReact is updated.
  useEffect(() => {
    // fetchData();
  }, [btnNameReact]);

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
              <Link href="#">Cart</Link>
            </li>
            <li className="px-4 ">
              <button
                className="Login"
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}
              >
                {btnNameReact}
              </button>
            </li>
            <li>
              <Link to="grocery">Grocery</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
