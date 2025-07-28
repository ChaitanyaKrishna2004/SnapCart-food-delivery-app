import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li className="dropdown">
              <a href="#">Menu</a>
              <ul className="Filter-Menu">
                <li>
                  <a>Desserts</a>
                </li>
                <li>
                  <a>Biryani</a>
                </li>
                <li>
                  <a>Beverages</a>
                </li>
                <li>
                  <a>Ice Cream</a>
                </li>
                <li>
                  <a>Bakery</a>
                </li>
              </ul>
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
