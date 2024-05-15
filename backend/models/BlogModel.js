import mongoose from "mongoose";

// const { Schema, model } = mongoose;

const blogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }, // Assuming image URL for simplicity
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogModel = mongoose.model("Blog", blogSchema);

export default BlogModel;
