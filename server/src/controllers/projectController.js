import { Project } from "../models/Project.js";

export async function getAllProjects(req, res, next) {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    next(err);
  }
}

export async function getProjectById(req, res, next) {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Khong tim thay project" });
    }

    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
}

export async function createProject(req, res, next) {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
}

export async function updateProject(req, res, next) {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!project) {
      return res.status(404).json({ success: false, message: "Khong tim thay project" });
    }

    res.json({ success: true, data: project });
  } catch (err) {
    next(err);
  }
}

export async function deleteProject(req, res, next) {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ success: false, message: "Khong tim thay project" });
    }

    res.json({ success: true, message: "Da xoa project" });
  } catch (err) {
    next(err);
  }
}
