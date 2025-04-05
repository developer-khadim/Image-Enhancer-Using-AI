import React from 'react';
import { FiGithub, FiHeart, FiCoffee } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="mt-16 mb-6 text-center">
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="flex items-center text-gray-600">
          <span>Made with</span>
          <FiHeart className="mx-1 text-red-500 animate-pulse" />
          <span>by <span className="text-blue-600 font-medium hover:underline cursor-pointer">@Khadim Ali</span></span>
        </div>
        
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} • AI Image Enhancer • All Rights Reserved
        </div>
        
        <div className="flex items-center space-x-6 mt-4">
          <a 
            href="https://github.com/developer-khadim" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/khadim-ali12/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          {/* <a 
            href="https://www.buymeacoffee.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-yellow-600 transition-colors duration-300 transform hover:scale-110"
            title="Buy me a coffee"
          >
            <FiCoffee className="w-5 h-5" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;