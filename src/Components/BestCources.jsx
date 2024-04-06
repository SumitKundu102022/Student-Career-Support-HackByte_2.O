import React from "react";

const BestCourses = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Best Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Course 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">
            Computer Networks And Internet Protocol
          </h3>
          <p className="text-lg mb-4">
            Your comprehensive guide to understanding computer networks and
            internet protocols, providing essential knowledge and resources for
            navigating the digital landscape.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Enroll Now
          </button>
        </div>

        {/* Course 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">
            Cloud Computing and Distributed Systems
          </h3>
          <p className="text-lg mb-4">
            Unlock the potential of cloud computing and distributed systems,
            revolutionizing how businesses and individuals access, store, and
            manage data across vast networks.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Enroll Now
          </button>
        </div>

        {/* Course 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Circuit Complexity Theory</h3>
          <p className="text-lg mb-4">
            Explore the depths of circuit complexity theory, unraveling the
            intricacies of computational complexity and the limits of efficient
            computation within circuits.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Enroll Now
          </button>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">
            Business Intelligence & Analytics
          </h3>
          <p className="text-lg mb-4">
            Empower your business decisions with insightful analytics and
            business intelligence solutions, transforming data into actionable
            insights for strategic growth and innovation.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Enroll Now
          </button>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">
            Blockchain and its Applications
          </h3>
          <p className="text-lg mb-4">
            Dive into the world of blockchain and its diverse applications,
            revolutionizing industries through decentralized systems,
            transparency, and secure transactions.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Enroll Now
          </button>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">
            ACM India Summer School on IoT and Embedded Systems
          </h3>
          <p className="text-lg mb-4">
            Join the ACM India Summer School to delve into IoT and embedded
            systems, exploring cutting-edge technologies and applications
            reshaping the future of connected devices.
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestCourses;
