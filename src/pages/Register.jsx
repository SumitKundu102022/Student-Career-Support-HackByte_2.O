// Register.js

import React from "react";
import Navbar from "./Components/nav";
import RegistrationForm from "./components/RegistrationForm"; // Assuming you have a component for the registration form
import Footer from "./Components/Footer";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Register</h1>
        <RegistrationForm />
        {/* Other components for registration page */}
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
