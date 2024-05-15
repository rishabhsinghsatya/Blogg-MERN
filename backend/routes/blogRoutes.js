import express from "express";
import BlogModel from "../models/BlogModel.js";

const router = express.Router();

// POST create new blog
router.post("/", async (req, res) => {
  const { userId, title, description, image } = req.body;

  try {
    const newBlog = new BlogModel({ userId, title, description, image });
    await newBlog.save();
    return res.status(201).json({ message: "Blog created successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// GET all blogs or blogs for specific user
router.get("/", async (req, res) => {
  try {
    const { userId } = req.query;
    let blogs;

    if (userId) {
      // If userId is provided, fetch blogs of the specific user
      blogs = await BlogModel.find({ userId });
    } else {
      // If userId is not provided, fetch all blogs
      blogs = await BlogModel.find();
    }

    return res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// PUT update blog by ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, image } = req.body;

  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ message: "Blog updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE blog by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBlog = await BlogModel.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
