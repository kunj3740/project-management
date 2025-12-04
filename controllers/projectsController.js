const Project = require('../models/projects');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.status(200).json({ success: true, data: projects, message: 'Projects retrieved successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while retrieving projects', error: error.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ success: false, message: 'Project name and description are required' });
    }
    const existingProject = await Project.findOne({ name });
    if (existingProject) {
      return res.status(409).json({ success: false, message: 'Project name already exists' });
    }
    const newProject = new Project({ name, description });
    const savedProject = await newProject.save();
    return res.status(201).json({ success: true, data: { id: savedProject._id, name: savedProject.name, description: savedProject.description }, message: 'Project created successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while creating the project', error: error.message });
  }
};