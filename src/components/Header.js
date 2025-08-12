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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <div className="nav-items">
          <ul>
            <li>OnlineStatus : {OnlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Cart</Link>
            </li>
            <li>
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
