const mongoose = require('mongoose');

const projectTeamsSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'projects',
    required: [true, 'Project ID is required']
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'teams',
    required: [true, 'Team ID is required']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('project_teams', projectTeamsSchema);