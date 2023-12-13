import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { CgUser } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const [openDropdown, setOpenDropdown] = useState(false);
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <div className="bg-main shadow-md sticky top-0 z-20">
      <div className="container mx-auto pt-2 pb-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
        {/* Logo */}
        <div className="col-span-1 lg:block hidden">
          <Link to="/">
            <img
              src="../../../public/logo.png"
              alt="logo"
              className="w-full object-contain"
            />
          </Link>
        </div>
        {/* Search form */}
        <div className="col-span-3">
          <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
            <button
              type="submit"
              className="bg-subMain w-12 flex-colo h-12 rounded text-white"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search movie by name..."
              className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
            />
          </form>
        </div>
        {/*  Menu */}
        <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
          <NavLink to="/movies" className={`${Hover} text-center`}>
            Movies
          </NavLink>
          <NavLink to="/about-us" className={`${Hover} text-center`}>
            About us
          </NavLink>
          <NavLink to="/contact-us" className={`${Hover} text-center`}>
            Contact us
          </NavLink>
          <NavLink to="/favorite" className={`${Hover} relative`}>
            <FaHeart className="w-6 h-6" />
            <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute bottom-4 left-5">
              3
            </div>
          </NavLink>
          {!username ? (
            <NavLink to="/login" className={`user-action-button ${Hover}`}>
              Login
            </NavLink>
          ) : (
            <>
              <p className={`${Hover} flex items-center relative`}>
                <p className="flex-col user-action-button">
                  <CgUser className="w-8 h-8" />
                  {username}
                </p>
                <IoIosArrowDown
                  className="w-6 h-6 hover:cursor-pointer"
                  onClick={() => setOpenDropdown(!openDropdown)}
                />
                {openDropdown && (
                  <div className="absolute top-full left-0 bg-white mt-1 rounded shadow-md w-full">
                    {/* Nội dung của dropdown */}
                    <NavLink
                      to="/profile"
                      className="block text-black h-9 dropdown"
                    >
                      <p>Profile</p>
                    </NavLink>
                    <p
                      className="block text-black h-9 dropdown"
                      onClick={() => {
                        localStorage.clear();
                        navigate("/");
                      }}
                    >
                      <p>Logout</p>
                    </p>
                  </div>
                )}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
