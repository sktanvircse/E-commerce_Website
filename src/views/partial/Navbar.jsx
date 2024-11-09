import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../../components/pageComponent/Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState(5); // Dynamic cart count

  return (
    <nav className="navbar">
      <div className="navbar-wrapper w-100 mx-10">
        <div className="navbar-left">
          <div className="logo">
            <Link to="/home" className="logo-link">
              TanvirShop
            </Link>
          </div>
          <div className="navbar-items">
            <Link className="navbar-item" to="/products/1">
              Women
            </Link>
            <Link className="navbar-item" to="/products/2">
              Men
            </Link>
            <Link className="navbar-item" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-items">
            <Link className="navbar-item" to="/home">
              Homepage
            </Link>
            <Link className="navbar-item" to="/home">
              About
            </Link>
            <Link className="navbar-item" to="/home">
              Contact
            </Link>
            <Link className="navbar-item" to="/home">
              Stores
            </Link>
          </div>
          <div className="navbar-icons">
            <SearchIcon  />
            <PersonOutlineOutlinedIcon  />
            <FavoriteBorderOutlinedIcon  />
            <div className="cart-icon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon  />
              {cartItems > 0 && <span className="cart-count">{cartItems}</span>}
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </nav>
  );
};

export default Navbar;
