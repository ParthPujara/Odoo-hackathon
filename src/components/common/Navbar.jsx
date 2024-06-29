import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/react.svg";
import { UilX } from "@iconscout/react-unicons"
import { useEffect, useState } from "react";
const inActiveClass =
  "block py-4 px-5 rounded-[15px] transition duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-900 hover:to-blue-950 text-gray-200 hover:font-medium";
const activeClass =
  "block py-4 px-5 rounded-[15px] transition duration-300 bg-gradient-to-r from-blue-900 shadow-xl to-blue-950 text-gray-200 hover:font-medium";

const NavBar = ({ setShowToggle, openNav, setOpenNav }) => {
  function checkActive({ isActive }) {
    return isActive ? activeClass : inActiveClass;
  }

  // function setRoute(name) {
  //   dispatch(setRouteName(name));
  // }

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    return () => {
      if (width <= 900) {
        setOpenNav(false)
        setShowToggle(true)
      }
      else {
        setOpenNav(true)
        setShowToggle(false)
      }
    }
  }, [width])
  return (
    <div className={`h-screen bg-blue-950 w-[20rem] min-w-[20rem] rounded-r-[20px] space-y-6 py-7 px-6 inset-y-0 left-0 transform transition duration-200 ease-in-out  
        ${openNav ? width <= 900 ? `translate-x-0 fixed z-50` : `translate-x-0 relative z-50` : '-translate-x-full fixed'}`}
    >
      <div className="logo flex align-center px-5 mb-10 w-full">
        <img  
          src={logo}
          alt="logo"
          className="h-8 w-8 object-cover rounded-full"
        />
        <span className="ml-[10px] text-white font-bold text-[1.2rem]">
          Furniture
        </span>
        <span className={`absolute top-3 right-7 ml-[10px] text-white font-bold text-[1.2rem] cursor-pointer ${width <= 900 ? '' : 'hidden'}`} onClick={() => { setShowToggle(true); setOpenNav(false); }}>
          <UilX />
        </span>
      </div>
      <NavLink
        to="dashboard"
        className={checkActive}
        onClick={() => { if (width <= 900) { setOpenNav(false); setShowToggle(true) } }}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="add-category"
        className={checkActive}
        onClick={() => { if (width <= 900) { setOpenNav(false); setShowToggle(true) } }}
      >
       Add Category
      </NavLink>
      <NavLink
        to="manage-subscription"
        className={checkActive}
        onClick={() => { if (width <= 900) { setOpenNav(false); setShowToggle(true) } }}
      >
        Manage Subscription
      </NavLink>

      <NavLink
        to="/"
        className={`${inActiveClass} + bg-red-500`}
        // onClick={() => Cookies.remove('auth-token')}
        onClick={() => localStorage.removeItem('auth-token')}
      >
        Logout
      </NavLink>
    </div>
  )
}

export default NavBar
