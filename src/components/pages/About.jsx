import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/images/about.png';

const About = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-gray-50 py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Side: Content */}
        <motion.div variants={fadeIn}>
          <h1 className="text-4xl font-extrabold mb-6 text-gray-800">About Us</h1>
          <p className="text-gray-600 leading-8 mb-6">
            Welcome to <span className="font-semibold text-blue-600">ShopEase</span>, your one-stop destination for high-quality products ranging from fashion to electronics.
            Our mission is to make your shopping experience seamless, enjoyable, and reliable.
          </p>
          <p className="text-gray-600 leading-8 mb-6">
            Established in 2025, we pride ourselves on delivering top-notch products with unmatched customer service.
            Whether you're searching for the latest trends or everyday essentials, <span className="font-semibold text-blue-600">ShopEase</span> has you covered.
          </p>
          <p className="text-gray-600 leading-8">
            Thank you for choosing us as your trusted shopping partner. We're here to make your life easier, one purchase at a time!
          </p>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImage}
            alt="About ShopEase"
            className="w-100 h-100"
          />
        </motion.div>
      </motion.div>

      {/* Highlights Section */}
      <motion.div
        className="mt-12 max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-gray-800"
          variants={fadeIn}
        >
          Why Choose ShopEase?
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Highlight 1 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            variants={fadeIn}
          >
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m4 18v-6m-4 0h4m4-6h3m-3 0V7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">High-Quality Products</h3>
            <p className="text-gray-600">
              We ensure the best products are delivered to your doorstep, meeting your expectations every time.
            </p>
          </motion.div>

          {/* Highlight 2 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            variants={fadeIn}
          >
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m2 4H7m2 0a2 2 0 00-2 2m10 0a2 2 0 002-2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Customer-Centric Approach</h3>
            <p className="text-gray-600">
              Our team is always here to support you, ensuring an unparalleled shopping experience.
            </p>
          </motion.div>

          {/* Highlight 3 */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            variants={fadeIn}
          >
            <div className="text-blue-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7m0 0v3m0-3h-3"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Fast and Reliable Shipping</h3>
            <p className="text-gray-600">
              Get your favorite products delivered on time with our reliable shipping service.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
