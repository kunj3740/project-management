const mongoose = require('mongoose');

const teamsSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: [true, 'ID is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minLength: [3, 'Name must be at least 3 characters long'],
    maxLength: [100, 'Name must be less than 100 characters long']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('teams', teamsSchema);