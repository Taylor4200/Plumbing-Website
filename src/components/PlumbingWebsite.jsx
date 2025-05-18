import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PhoneIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import BookingModal from './BookingModal';

const PlumbingWebsite = () => {
  const currentYear = new Date().getFullYear();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-soft z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">PlumbPro</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">About</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors duration-200">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-soft">
              <PhoneIcon className="h-5 w-5 mr-2" />
              Call Now
            </a>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="hidden md:flex items-center px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors duration-200 shadow-soft"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Book Appointment
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Your Local Plumbing Experts
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                24/7 emergency services, professional leak repair, and expert drain cleaning. 
                We're here when you need us most.
              </p>
              <button className="px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all duration-200 transform hover:scale-105 shadow-soft">
                Get a Free Estimate
              </button>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-soft"
            >
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gradient-to-br from-primary-50 to-primary-100">
                Hero Image Placeholder
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Professional plumbing services for your home or business. We handle everything from emergency repairs to routine maintenance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Plumbing",
                description: "24/7 emergency services for urgent plumbing issues",
                icon: "🚨"
              },
              {
                title: "Scheduled Repairs",
                description: "Professional maintenance and repair services",
                icon: "🔧"
              },
              {
                title: "Drain Cleaning",
                description: "Expert drain cleaning and clog removal",
                icon: "🚰"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl shadow-soft hover:shadow-lg transition-all duration-200 border border-gray-100 hover:border-primary-100"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                {[
                  "Licensed & Insured Professionals",
                  "Transparent Pricing - No Hidden Fees",
                  "Experienced Technicians",
                  "24/7 Emergency Service",
                  "Satisfaction Guaranteed"
                ].map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-soft"
            >
              {/* Placeholder for team image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gradient-to-br from-primary-50 to-primary-100">
                Team Image Placeholder
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section / Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <a href="tel:+1234567890" className="flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200">
                <PhoneIcon className="h-5 w-5 mr-2" />
                (123) 456-7890
              </a>
              <p className="text-gray-400">
                123 Plumbing Street<br />
                Your City, State 12345
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Service Area</h3>
              <p className="text-gray-400">
                Serving the greater metropolitan area<br />
                Including surrounding suburbs
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaFacebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter page"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {currentYear} PlumbPro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add the BookingModal component */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default PlumbingWebsite; 