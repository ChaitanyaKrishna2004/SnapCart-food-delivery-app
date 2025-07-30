import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");
  // if no dependency array => useeffect is called on ever render.
  // if dependency array is empty = [] => useEffect is called on onlyinitial render(just once)
  // if dependency array is empty [btnNameReact] => called evrytime btnNameReact is updated.
  useEffect(() => {
    console.log("useEffect called");
    // fetchData();
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <div className="nav-items">
          <ul>
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
              <a href="#">Cart</a>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
