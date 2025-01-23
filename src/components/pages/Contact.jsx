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
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      setStatus('Please fill in all required fields.');
      setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
      return;
    }
  
    // Replace with your actual EmailJS IDs
    const SERVICE_ID = 'service_53ivjwx';
    const TEMPLATE_ID = 'template_wkha7r7';
    const PUBLIC_KEY = 'sFohUdiVD1DPNlIez';
  
    // Check if the message field is empty
    const messageToSend = formData.message.trim() === '' ? 'This is an empty message.' : formData.message;
  
    // Create a temporary form data object with empty or placeholder message
    const emailData = {
      name: formData.name,
      email: formData.email,
      message: messageToSend, // Send the message or an empty one if the message is empty
    };
  
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY)
      .then(
        (response) => {
          console.log('Success:', response);
          setStatus('Message sent successfully!');
          setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error:', error);
          setStatus('An error occurred. Please try again.');
          setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
        }
      );
  };
  
  return (
    <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 min-h-screen py-12 px-4 overflow-hidden">
      {/* Background Animated Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 opacity-20"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
          }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-20"
          animate={{
            x: [-50, 50, -100, 50],
            y: [50, 0, 100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
          }}
          style={{ top: '30%', right: '20%' }}
        />
      </motion.div>

      {/* Centered Status Message */}
      {status && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`fixed top-10 px-6 py-3 rounded-lg shadow-lg text-white 
        ${status === 'Message sent successfully!' ? 'bg-green-500' : 'bg-red-500'}`}
>
      {status}
    </motion.div>
  </div>
)}


      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-6 text-white">Contact Us</h1>
        <p className="text-white mb-6 leading-relaxed">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out.
          Use the form below, and we’ll get back to you as soon as possible.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        onSubmit={handleSubmit}
        className="relative bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto"
      >
        {/* Name Field */}
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
            className={`w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-3 ${
              errors.name ? 'border-red-500' : ''
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
          )}
        </motion.div>

        {/* Email Field */}
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
            className={`w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-3 ${
              errors.email ? 'border-red-500' : ''
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </motion.div>

        {/* Message Field */}
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
            className={`w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-3 ${
              errors.message ? 'border-red-500' : ''
            }`}
            placeholder="Enter your message"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-2">{errors.message}</p>
          )}
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;
