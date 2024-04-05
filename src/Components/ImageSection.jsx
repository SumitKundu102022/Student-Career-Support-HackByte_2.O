import React from "react";

const ImageSection = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between gap-2">
        <div className="w-1/3 relative">
          <img
            src="/src/assets/scholarship-for-students.jpg"
            alt="Image 1"
            className="w-full h-64 rounded-lg transition duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
            <span className="text-white text-lg font-bold">
              Career Assistance
            </span>
          </div>
        </div>
        <div className="w-1/3 relative">
          <img
            src="/src/assets/img2.webp"
            alt="Image 2"
            className="w-full h-64 rounded-lg transition duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
            <span className="text-white text-lg font-bold">
              Financial assistance programs
            </span>
          </div>
        </div>
        <div className="w-1/3 relative">
          <img
            src="/src/assets/img3.png"
            alt="Image 3"
            className="w-full h-64 rounded-lg transition duration-300 transform hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
            <span className="text-white text-lg font-bold">
              Expert-recommended courses
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
