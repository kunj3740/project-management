const ProjectTeams = require('../models/project_teams');

exports.getAllProjectTeams = async (req, res) => {
  try {
    const projectTeams = await ProjectTeams.find().populate('projectId').populate('teamId');
    return res.status(200).json({ success: true, data: projectTeams, message: 'Project teams retrieved successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'An error occurred while retrieving project teams', error: error.message });
  }
};