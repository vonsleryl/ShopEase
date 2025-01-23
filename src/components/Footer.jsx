import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="w-100 h-100" /> {/* Adjusted logo size */}
        </div>

        {/* Website Information Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className=" text-lg mb-2">ShopEase</h3>
          <p className="text-sm mb-2">Your one-stop shop for fashion, electronics, and more.</p>
          <p className="text-sm mb-2">We provide top-quality products with fast and reliable shipping.</p>
        </div>

        {/* Quick Links Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="font-semibold text-md mb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="text-sm hover:text-blue-500">Home</a>
            </li>
            <li>
              <a href="/shop" className="text-sm hover:text-blue-500">Shop</a>
            </li>
            <li>
              <a href="/about" className="text-sm hover:text-blue-500">About</a>
            </li>
            <li>
              <a href="/contact" className="text-sm hover:text-blue-500">Contact</a>
            </li>
          </ul>
        </div>

        {/* Reach Us Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h4 className="font-semibold text-md mb-2">Reach Us</h4>
          <p className="text-sm mb-2">Email: vonsleryligot0@gmail.com</p>
          <p className="text-sm mb-2">Phone: 09474127696</p>
          <p className="text-sm mb-2">Address: Lapu-Lapu City</p>
        </div>

        {/* Social Media Section */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2025 ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
