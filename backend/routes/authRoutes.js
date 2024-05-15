import express from "express";
import UserModel from "../models/UserModel.js";

const router = express.Router();

// POST route for user registration
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists with the provided email
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    // Create new user
    const newUser = new UserModel({ username, email, password });
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// POST route for user login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await UserModel.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
