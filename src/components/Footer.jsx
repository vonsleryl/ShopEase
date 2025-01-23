import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img src={logo} alt="Logo" className="w-100 h-100" />
        </div>

        {/* Website Information Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg mb-2">ShopEase</h3>
          <p className="text-sm mb-2">
            Your one-stop shop for fashion, electronics, and more.
          </p>
          <p className="text-sm mb-2">
            We provide top-quality products with fast and reliable shipping.
          </p>
        </div>

        {/* Reach Us Section */}
        <div className="text-center md:text-left">
          <h4 className="font-semibold text-md mb-2">Reach Us</h4>
          <p className="text-sm mb-2">Email: vonsleryligot0@gmail.com</p>
          <p className="text-sm mb-2">Phone: 09474127696</p>
          <p className="text-sm mb-2">
            Address: <a 
              href="https://www.google.com/maps/search/?q=8XC9+WWF,+Ibabao,+Lapu-Lapu+City,+Cebu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline"
            >8XC9+WWF, Ibabao, Lapu-Lapu City, Cebu
            </a>
          </p>

        </div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-500 text-xl">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-500 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-500 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-500 text-xl">
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
