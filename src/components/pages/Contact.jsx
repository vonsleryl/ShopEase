import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual EmailJS IDs
    const SERVICE_ID = 'service_53ivjwx';
    const TEMPLATE_ID = 'template_wkha7r7';
    const PUBLIC_KEY = 'sFohUdiVD1DPNlIez'; // Replace this with your EmailJS Public Key

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        (response) => {
          console.log('Success:', response);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error:', error);
          setStatus('An error occurred. Please try again.');
        }
      );
  };

  return (
    <div className="bg-gray-100 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out. 
          Use the form below, and we’ll get back to you as soon as possible.
        </p>
        {status && (
          <p
            className={`text-lg font-medium ${
              status.includes('successfully')
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {status}
          </p>
        )}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto"
      >
        <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
          <label
            htmlFor="name"
            className="block text-left font-medium mb-2 text-gray-800"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-3"
            placeholder="Enter your name"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
          <label
            htmlFor="email"
            className="block text-left font-medium mb-2 text-gray-800"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-3"
            placeholder="Enter your email"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
          <label
            htmlFor="message"
            className="block text-left font-medium mb-2 text-gray-800"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-3"
            placeholder="Enter your message"
          ></textarea>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
