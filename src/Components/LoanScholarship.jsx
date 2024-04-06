import React from "react";

const LoanScholarship = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Loan/Scholarship</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Loan Section */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 text-white m-2">
          <h3 className="text-xl font-bold mb-2">Loan Options</h3>
          <p className="text-lg mb-4">
            We offer various loan options to assist students in financing their
            education. Our financial aid office can provide guidance on
            eligibility criteria and application processes.
          </p>
          <ul className="list-disc list-inside">
            <li>Low-interest student loans</li>
            <li>Government-sponsored loans</li>
            <li>Private loans</li>
          </ul>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-4">
            Apply Now
          </button>
        </div>

        {/* Scholarship Section */}
        <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-6 text-white m-2">
          <h3 className="text-xl font-bold mb-2">Scholarship Opportunities</h3>
          <p className="text-lg mb-4">
            We offer various scholarships to deserving students based on
            academic merit, financial need, and other criteria. Scholarships can
            significantly reduce the financial burden of education.
          </p>
          <ul className="list-disc list-inside">
            <li>Merit-based scholarships</li>
            <li>Need-based scholarships</li>
            <li>Specialized scholarships for specific fields of study</li>
          </ul>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mt-4">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanScholarship;
