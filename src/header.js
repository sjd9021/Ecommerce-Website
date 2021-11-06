// this code is for the header of the webpage

import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import image from "./photos/logo-ashoka.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={image} />
      </Link>
      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="header_searchicon" />
        {/* logo */}
      </div>
      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionone">Hello Guest</span>
            <span className="header_optiontwo">Sign In</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionone">Return </span>
          <span className="header_optiontwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionone">Your</span>
          <span className="header_optiontwo">shutup</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionbasket">
            <ShoppingBasketIcon />
            <span className=" header_optiontwo header_basketcount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
