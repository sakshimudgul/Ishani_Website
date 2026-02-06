import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../assets";

function Navbar() {
  return (
    <div
      className="p-8 bg-white fixed
     w-full top-0 z-40 gap-10 ">
      <div className="h-0 w-24">
        <img src={logo} alt="" />
      </div>
      <div className="flex justify-end gap-10 mr-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/Gallery">Gallery</NavLink>
        <NavLink to="/Product">Products</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
