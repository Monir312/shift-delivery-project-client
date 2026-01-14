import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { Link } from 'react-router';
import { FaBars } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => {
        console.log(error);
      })
  }


  const links = (
    <>
      <li><Link to="/" className="text-gray-700 hover:text-green-600 transition">Services</Link></li>
      <li><Link to="/send-parcel" className="text-gray-700 hover:text-green-600 transition">Send Parcel</Link></li>
      <li><Link to="/rider" className="text-gray-700 hover:text-green-600 transition">Be a Rider</Link></li>
      <li><Link to="/coverage" className="text-gray-700 hover:text-green-600 transition">Coverage Areas</Link></li>
     

      {
        user && <>
        <li><Link to="/dashboard/my-parcels" className="text-gray-700 hover:text-green-600 transition">My Parcels</Link></li>
        <li><Link to="/dashboard" className="text-gray-700 hover:text-green-600 transition">Dashboard</Link></li>
        </>
      }

       <li><Link to="/" className="text-green-600 font-semibold">About Us</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
      {/* Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"> <FaBars className="h-5 w-5" /> </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {links} </ul>
        </div>

        <span to="/" className="btn btn-ghost text-xl"> <Logo /> </span>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-6">
          {links}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="navbar-end flex gap-4">
        {
          user ?
            <Link to="/register">
              <button onClick={handleLogOut} className="bg-[#caeb66] text-black font-bold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition">
                <span>Sign Out</span>
                <span className="bg-black text-white rounded-full p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
            :
            <Link to="/login">
              <button className="bg-[#caeb66] text-black font-bold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition">
                Sign In
                <span className="bg-black text-white rounded-full p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>

        }

        <Link to="/rider" className="bg-[#caeb66] text-black font-bold px-5 py-2 rounded-full flex items-center gap-2 hover:bg-green-600 transition">
          Be a Rider
        </Link>

      </div>
    </div>


  );
};

export default NavBar;
