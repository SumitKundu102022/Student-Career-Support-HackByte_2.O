import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Importing social icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      {" "}
      {/* Increased py-8 for larger padding */}
      <div className="container mx-auto flex justify-between items-center px-7">
        <p className="text-sm">&copy; 2024 Your Company</p>
        <ul className="flex justify-between items-center gap-9 w-4">
          {" "}
          {/* Social Icons */}
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram />
            </a>
          </li>
        </ul>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Student Counseling</a>
            </li>
            <li>
              <a href="#">Loan/Scholarship</a>
            </li>
            <li>
              <a href="#">Best Courses</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
