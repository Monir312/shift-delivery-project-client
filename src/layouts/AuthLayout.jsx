import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import AuthImg from '../assets/authImage.png'

const AuthLayout = () => {
  return (
    <div className='max-w-7xl mx-auto mt-4'>
      <Logo></Logo>
      <div className='flex '>
        <div className='flex-1'>
          <Outlet></Outlet>
        </div>
        {/* Right Section – Illustration */}
        <div className="hidden flex-1 md:flex items-center justify-center bg-[#f7fbe8]">
          <img
            src={AuthImg}
            alt="Login Illustration"
            className="w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;