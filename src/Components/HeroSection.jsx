// src/components/HeroSection.js

import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Student Career Counselling</h1>
        <p className="text-lg mb-8">This is the best place to learn and Explore!</p>
        <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-10 rounded">
          Login 
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
