import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/slices/UserApi";
import { selectUserProfile, clearProfile } from "../redux/slices/UserSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userProfile = useSelector(selectUserProfile);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async (e) => {
    e.preventDefault();
    const response = await logout();
    if (response.error) {
      toast.error(response.error.data?.message || "Logout failed!", {
        position: "top-center",
      });
    } else {
      toast.success(response.data?.message || "Logout successful!", {
        position: "top-center",
      });
    }
    dispatch(clearProfile());
    setDropdownOpen(false);
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const navLinkClass = `group relative text-white px-3 py-2 text-lg font-medium text-[#1572D3] hover:text-[#1572D3] transition-colors duration-300`;
  const underlineSpan = (
    <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#1572D3] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
  );

  return (
    <nav className="w-[100%] max-w-[2100px] bg-gradient-to-tr from-[#cbdbec] to-[#1E94AC] shadow-md py-2 fixed top-0 z-40">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center transition-all ease-in duration-500">
            <div className="w-28 h-20 sm:w-32 sm:h-24 md:w-36 md:h-28 lg:w-44 lg:h-32">
              <Link to="/">
                <img
                  src="/newlog.png"
                  className="w-full  h-full object-contain"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-2 lg:space-x-4 text-lg lg:text-xl">
              {navItems.map(({ name, path }) => (
                <Link key={name} to={path} className={navLinkClass}>
                  {name} {underlineSpan}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
            {userProfile ? (
              <div className="relative">
                {/* Profile Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center bg-[#1572D3] text-white font-bold rounded-full cursor-pointer overflow-hidden border-2 border-white hover:opacity-90 transition"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {userProfile.profilePic ? (
                    <img
                      src={userProfile.profilePic}
                      alt="User Avatar"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-lg">
                      {userProfile.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-[#060145] text-white border rounded-lg shadow-lg z-30">
                    <ul className="py-2">
                      {userProfile.role === "Admin" && (
                        <li
                          className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer"
                          onClick={() => {
                            navigate("/dashboard");
                            setDropdownOpen(false);
                          }}
                        >
                          Dashboard
                        </li>
                      )}
                      <li
                        className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer"
                        onClick={() => {
                          navigate("/my-profile");
                          setDropdownOpen(false);
                        }}
                      >
                        My Profile
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="text-white px-6 py-2 border border-[#f3f7f9] rounded-full text-base font-semibold 
                  shadow-lg bg-[#1E94AC] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#01b5e8] focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#cbdbec] to-[#1E94AC]">
          <div className="px-2 pt-2 pb-4 space-y-3 sm:px-3 flex flex-col items-center">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className="w-full max-w-xs text-center px-3 py-2 rounded-md text-lg font-medium text-white hover:text-[#01b5e8] hover:bg-gray-50/10 transition-colors duration-200"
              >
                {name}
              </Link>
            ))}

            {/* Mobile User Profile */}
            {userProfile && (
              <>
                {userProfile.role === "Admin" && (
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full max-w-xs text-center px-3 py-2 rounded-md text-lg font-medium text-white hover:text-[#01b5e8] hover:bg-gray-50/10 transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                )}
                <Link
                  to="/my-profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full max-w-xs text-center px-3 py-2 rounded-md text-lg font-medium text-white hover:text-[#01b5e8] hover:bg-gray-50/10 transition-colors duration-200"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full max-w-xs text-center px-3 py-2 rounded-md text-lg font-medium text-white hover:text-[#01b5e8] hover:bg-gray-50/10 transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            )}

            {/* CTA Button */}
            {!userProfile && (
              <div className="w-full flex justify-center pt-2">
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white px-6 py-2 border border-[#f3f7f9] rounded-full text-base font-semibold 
                  shadow-lg bg-[#1E94AC]"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
