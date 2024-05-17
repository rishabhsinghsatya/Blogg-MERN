// frontend/src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CreateBlogPage from "./pages/CreateBlogPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-blog" element={<CreateBlogPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
