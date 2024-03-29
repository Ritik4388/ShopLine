import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartState = useSelector((state) => state.cart);
  const wishlistState = useSelector((state) => state.wishlist);
  return (
    <div className="navbarContainer">
      <NavLink to="/" className="brandName">
        ShopLine
      </NavLink>
      <div className="navbarOptions">
        <NavLink to="/men">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/electronics">Electronics</NavLink>
        <NavLink to="/jewelery">Jewelery</NavLink>
      </div>
      <form>
        <input
          type="text"
          placeholder="Search for Products / Categories"
          className="navbarInput"
        ></input>
      </form>
      <div className="profileUtils muiIcon">
        <NavLink to="/wishlist">
          <FavoriteBorderIcon sx={{ fontSize: 25 }} />
          Wishlist ({wishlistState && wishlistState.length})
        </NavLink>
        <NavLink to="/cart">
          <ShoppingCartOutlinedIcon sx={{ fontSize: 25 }} />
          Cart ({cartState && cartState.length})
        </NavLink>
        <NavLink to="/profile">
          <PermIdentityOutlinedIcon sx={{ fontSize: 30 }} />
          Profile
        </NavLink>
      </div>

      <div
        className={`hamburgerMenu ${isOpen ? "hide" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`toggleMenuNavBar ${isOpen ? "show" : ""}`}>
        <div className="crossToCut" onClick={() => setIsOpen(!isOpen)}>
          x
        </div>
        <div className="navbarOptionsInToggleMenu">
          <NavLink to="/men">Men</NavLink>
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/electronics">Electronics</NavLink>
          <NavLink to="/jewelery">Jewelery</NavLink>
        </div>
        <div className="profileUtilsInToggleMenu">
          <NavLink to="/wishlist">
            <FavoriteBorderIcon sx={{ fontSize: 25 }} />
            Wishlist ({wishlistState && wishlistState.length})
          </NavLink>
          <NavLink to="/cart">
            <ShoppingCartOutlinedIcon sx={{ fontSize: 25 }} />
            Cart ({cartState && cartState.length})
          </NavLink>
          <NavLink to="/profile">
            <PermIdentityOutlinedIcon sx={{ fontSize: 30 }} />
            Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
