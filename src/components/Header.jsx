import React from "react";
import { FiGithub } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="text-center mb-12 animate-fade-in">
       
      <div className="relative inline-block">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 animate-pulse">
          AI Image Enhancer
        </h1>
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 rounded-full"/>
        
      </div>

      <div className="flex items-center justify-center space-x-6 mt-6">
          <a 
            href="https://github.com/developer-khadim" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 text-gray-700 hover:text-gray-900"
          >
            <FiGithub className="w-5 h-5" />
            <span className="font-medium">GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/khadim-ali12/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-full transition-all duration-300 text-blue-700 hover:text-blue-900"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-6">
        Transform your images with <span className="font-semibold text-indigo-600">cutting-edge AI technology</span> in just seconds!
      </p>
      <div className="flex flex-wrap justify-center mt-4 space-x-2">
        <span className="inline-flex items-center px-3 py-1 my-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          Super Resolution
        </span>
        <span className="inline-flex items-center px-3 py-1 my-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
          Detail Enhancement
        </span>
        <span className="inline-flex items-center px-3 py-1 my-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
          Noise Reduction
        </span>
      </div>
    </header>
  );
};

export default Header;
