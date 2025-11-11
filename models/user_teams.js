const mongoose = require('mongoose');

const userTeamsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: [true, 'User ID is required']
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

module.exports = mongoose.model('user_teams', userTeamsSchema);