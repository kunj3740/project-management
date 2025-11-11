const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Project name is required'],
    unique: true,
    trim: true,
    maxLength: [100, 'Project name must be less than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    maxLength: [500, 'Project description must be less than 500 characters']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('projects', projectsSchema);