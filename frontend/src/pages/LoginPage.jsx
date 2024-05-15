// frontend/src/pages/LoginPage.js

import React from "react";
import AuthForm from "../components/AuthForm";
import authService from "../services/authService";

const LoginPage = () => {
  const handleLogin = async (formData) => {
    try {
      await authService.login(formData);
      // Redirect to dashboard after successful login
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <AuthForm onSubmit={handleLogin} buttonText="Login" />
    </div>
  );
};

export default LoginPage;
