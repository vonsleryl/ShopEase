import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="text-gray-700 leading-7 mb-4">
          Welcome to <span className="font-semibold">ShopEase</span>, your one-stop destination for high-quality products ranging from fashion to electronics.
          Our mission is to make your shopping experience seamless, enjoyable, and reliable. 
        </p>
        <p className="text-gray-700 leading-7 mb-4">
          Established in 2025, we pride ourselves on delivering top-notch products with unmatched customer service. 
          Whether you're searching for the latest trends or everyday essentials, ShopEase has you covered.
        </p>
        <p className="text-gray-700 leading-7">
          Thank you for choosing us as your trusted shopping partner. We're here to make your life easier, one purchase at a time!
        </p>
      </div>
    </div>
  );
};

export default About;
