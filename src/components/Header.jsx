import React from "react";

const Header = () => {
  return (
    <header className="text-center mb-12 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        AI Image Enhancer
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Transform your images with cutting-edge AI technology in just seconds!
      </p>
    </header>
  );
};

export default Header;
