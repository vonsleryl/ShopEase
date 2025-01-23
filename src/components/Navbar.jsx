import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom'; // Import Link
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Closes the menu when a link is clicked
  };

  return (
    <nav className="bg-white text-black-900 p-7">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo Image */}
        <img src={logo} alt="Logo" className="w-100 h-100" /> {/* Adjusted logo size */}

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/home" className="hover:text-blue-900">Home</Link>
          <Link to="/shop" className="hover:text-blue-900">Shop</Link>
          <Link to="/about" className="hover:text-blue-900">About</Link>
          <Link to="/contact" className="hover:text-blue-900">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black-900 p-4 space-y-4">
          <Link to="/home" className="block hover:text-blue-900" onClick={handleLinkClick}>Home</Link>
          <Link to="/shop" className="block hover:text-blue-900" onClick={handleLinkClick}>Shop</Link>
          <Link to="/about" className="block hover:text-blue-900" onClick={handleLinkClick}>About</Link>
          <Link to="/contact" className="block hover:text-blue-900" onClick={handleLinkClick}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
