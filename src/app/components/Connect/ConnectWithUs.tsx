'use client';
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiSend, FiPhone, FiMail } from 'react-icons/fi';

export default function ConnectSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log('Form submitted:', formState);
    // Reset form after submission
    setFormState({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: ''
    });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6 relative overflow-hidden">
      {/* Abstract background shapes for visual interest */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full opacity-20 -ml-32 -mb-32"></div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12 relative">
          Connect With Us
          <span className="block mx-auto mt-4 w-24 h-1 bg-blue-500"></span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 relative z-10">
          {/* Form Section */}
          <div className="w-full lg:w-3/5 bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 outline-none The key addition here is placeholder-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 outline-none placeholder-gray-300"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 outline-none placeholder-gray-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">Area of Interest</label>
                  <select
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 outline-none bg-white text-gray-300"
                  >
                    <option value="">Select an option</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-apps">Mobile Applications</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or requirement"
                  className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 outline-none h-32 resize-none placeholder-gray-300"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info Section */}
          <div className="w-full lg:w-2/5 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiMail className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">Email Us</h4>
                  <a href="mailto:hello@innovaglobal.com" className="text-blue-600 hover:underline transition-all">
                    hello@innovaglobal.com
                  </a>
                  <p className="text-gray-600 mt-2 text-sm">
                    We'll respond to your inquiry within 24 hours.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiPhone className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">Call Us</h4>
                  <a href="tel:+1234567890" className="text-blue-600 hover:underline transition-all">
                    (123) 456-7890
                  </a>
                  <p className="text-gray-600 mt-2 text-sm">
                    Available Monday-Friday, 9AM-5PM EST
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-lg text-gray-800 mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <FaFacebook size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Stay updated with our latest news and projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}