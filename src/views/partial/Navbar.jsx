import React, { useState , useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../../components/pageComponent/Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="center">
            <Link className="link" to="/home">
              TanvirShop
            </Link>
          </div>

          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/home">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/home">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/home">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/home">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
