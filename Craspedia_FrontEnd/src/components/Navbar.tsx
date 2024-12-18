import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import searchIcon from "../assets/search_icon.png";
import profileIcon from "../assets/profile_icon.png";
import cartIcon from "../assets/cart_icon.png";
import logo from "../assets/craspedia_bw.png";
import hamburgerIcon from "../assets/interface.png";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 w-full bg-white shadow-lg py-3 px-10 z-50">
      {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="logo" className="w-10 h-10 cursor-pointer" />
      </NavLink>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <img
          src={hamburgerIcon}
          alt="menu"
          className="w-6 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex gap-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm font-medium transition-all duration-200 ${
              isActive ? "text-yellow-500" : "text-black"
            }`
          }
          style={{ textDecoration: "none" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/collections"
          className={({ isActive }) =>
            `text-sm font-medium transition-all duration-200 ${
              isActive ? "text-yellow-500" : "text-black"
            }`
          }
          style={{ textDecoration: "none" }}
        >
          Collections
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-sm font-medium transition-all duration-200 ${
              isActive ? "text-yellow-500" : "text-black"
            }`
          }
          style={{ textDecoration: "none" }}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-sm font-medium transition-all duration-200 ${
              isActive ? "text-yellow-500" : "text-black"
            }`
          }
          style={{ textDecoration: "none" }}
        >
          Contact
        </NavLink>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuVisible && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-start gap-2 py-3 px-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-yellow-500" : "text-black"
                }`
              }
              style={{ textDecoration: "none" }}
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/collections"
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-yellow-500" : "text-black"
                }`
              }
              style={{ textDecoration: "none" }}
              onClick={toggleMenu}
            >
              Collections
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-yellow-500" : "text-black"
                }`
              }
              style={{ textDecoration: "none" }}
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-yellow-500" : "text-black"
                }`
              }
              style={{ textDecoration: "none" }}
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}

      {/* Icons */}
      <div className="flex items-center gap-6">
        <img src={searchIcon} alt="search" className="w-5 cursor-pointer" />
        <NavLink to="/cart" className="relative" style={{ textDecoration: "none" }}>
          <img src={cartIcon} alt="cart" className="w-5 cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">
            0
          </div>
        </NavLink>

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <img
            src={profileIcon}
            alt="profile"
            className="w-5 cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5">
                <p className="cursor-pointer hover:text-yellow-500 text-sm font-medium">
                  Profile
                </p>
                <p className="cursor-pointer hover:text-yellow-500 text-sm font-medium">
                  Settings
                </p>
                <p className="cursor-pointer hover:text-yellow-500 text-sm font-medium">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
