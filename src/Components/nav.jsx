// src/Navbar.js


import React from "react";

function navbar() {
  return (
    <nav className="bg-gray-800 p-0"> 
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <span>
            <img
              src="/src/assets/logo2.png"
              alt="Image 1"
              className="w-16 h-16 rounded-lg transition duration-300 text-left transform hover:scale-105"
            />
          </span>
          <div className="flex-shrink-0">
            <span className="text-white text-xl">Student Career Support</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4 text-white">
              <li>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
                  Student counselling
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
                  Loan/Scholarship
                </a>
              </li>
              <li>
                <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
                  Best Courses
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;



