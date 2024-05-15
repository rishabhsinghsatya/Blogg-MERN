// frontend/src/pages/RegisterPage.js

import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import authService from "../services/authService";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      await authService.register(formData);
      // Redirect to create blog post page after successful registration
      navigate("/create-blog");
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error (e.g., display error message)
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <AuthForm onSubmit={handleRegister} buttonText="Register" />
    </div>
  );
};

export default RegisterPage;
