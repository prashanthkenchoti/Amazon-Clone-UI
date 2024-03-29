
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-gray-700 h-16 flex justify-between items-center px-4 relative'>
      {/* Logo */}
      <Link to="/" className='flex items-center'>
        <img src="/amazon logo.PNG" alt="Amazon Logo" className='h-16 w-38 mr-2' />
      </Link>

      {/* Search bar */}
      <div className='flex-1'>
        <input
          type='text'
          placeholder='Search for Products, Categories, etc....'
          className='px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-3/4 ml-40' // Added 'w-full' to make the input full width
        />
      </div>

      {/* Link block */}
      <div className='flex items-center space-x-4'>
        {/* Login */}
        <Link to={"/login"} className='text-white   font-semibold '>Login</Link>

        {/* Become a seller option */}
        <Link to={"/seller/register"} className='text-white font-semibold'>Become a Seller</Link>

         {/* Become a new option */}
         <Link to={"/customer/register"} className='text-white font-semibold'>New Customer?Signup</Link>


        {/* Cart */}
        <Link to={"/cart"} className='text-white font-semibold'>Cart</Link>
      </div>
    </header>
  );
}

export default Header;

