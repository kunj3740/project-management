const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxLength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    trim: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'projects',
    required: [true, 'Project ID is required']
  }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('todos', todosSchema);