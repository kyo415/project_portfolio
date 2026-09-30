import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Ten project la bat buoc"],
      trim: true,
      maxlength: 150,
    },
    description: {
      type: String,
      required: [true, "Mo ta la bat buoc"],
      trim: true,
      maxlength: 2000,
    },
    techStack: {
      type: [String],
      default: [],
    },
    imageUrl: {
      type: String,
      trim: true,
      default: "",
    },
    demoUrl: {
      type: String,
      trim: true,
      default: "",
    },
    githubUrl: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model("Project", projectSchema);
