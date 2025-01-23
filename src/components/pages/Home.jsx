import React from 'react';
import homeImage from '../../assets/images/home.png'; // Ensure correct path
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Correct import for swiper styles
import 'swiper/css/pagination'; // If you're using pagination
import 'swiper/css/navigation'; // If you're using navigation
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-900 mb-12 sm:mb-16 md:mb-20">
    {/* Hero Section */}
    <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-12">
        {/* Slogan Content */}
        <motion.div
        className="flex-1 text-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        >
        <h1 className="text-5xl font-semibold mb-4">Your Everyday Shopping, Made Easy.</h1>
        <p className="text-lg text-gray-700 mb-6">
            Discover a seamless shopping experience with ShopEase.
        </p>

        {/* Shop Now Button */}
        <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            Shop Now
        </motion.button>
        </motion.div>

        {/* Floating Image */}
        <motion.div
        className="flex-1 flex justify-end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        >
        <img
            src={homeImage}
            alt="Home Decoration"
            className="w-80 h-80 md:w-[28rem] md:h-[28rem] opacity-90 animate-float"
        />
        </motion.div>
    </section>

    {/* Features Section */}
    <section className="mt-12 w-full max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Us?</h2>

        {/* Swiper Carousel for mobile and tablet screens */}
        <div className="md:hidden">
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
        >
            {/* Feature 1 */}
            <SwiperSlide>
            <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
                <p className="text-gray-600">We offer top-quality products to meet your needs.</p>
            </motion.div>
            </SwiperSlide>

            {/* Feature 2 */}
            <SwiperSlide>
            <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
                <p className="text-gray-600">Enjoy quick and reliable delivery to your doorstep.</p>
            </motion.div>
            </SwiperSlide>

            {/* Feature 3 */}
            <SwiperSlide>
            <motion.div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
                <p className="text-gray-600">We're here to assist you every step of the way.</p>
            </motion.div>
            </SwiperSlide>
        </Swiper>
        </div>

        {/* Grid Layout for larger screens */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h3 className="font-semibold text-lg mb-2">Quality Products</h3>
            <p className="text-gray-600">We offer top-quality products to meet your needs.</p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h3 className="font-semibold text-lg mb-2">Fast Shipping</h3>
            <p className="text-gray-600">Enjoy quick and reliable delivery to your doorstep.</p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
            <p className="text-gray-600">We're here to assist you every step of the way.</p>
        </motion.div>
        </div>
    </section>
    </div>

  );
};

export default Home;
