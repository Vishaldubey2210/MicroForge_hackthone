const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    default: '',
    maxlength: 500,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dbType: {
    type: String,
    enum: ['mongodb', 'postgresql'],
    default: 'mongodb',
  },
  settings: {
    includeAuth: { type: Boolean, default: true },
    includeSwagger: { type: Boolean, default: true },
    includeValidation: { type: Boolean, default: true },
    includeDocker: { type: Boolean, default: false },
    port: { type: Number, default: 3000 },
  },
  generatedCode: {
    type: mongoose.Schema.Types.Mixed,
    default: null,
  },
  lastGeneratedAt: {
    type: Date,
    default: null,
  },
}, {
  timestamps: true,
});

// Index for faster user-based queries
projectSchema.index({ userId: 1, createdAt: -1 });

module.exports = mongoose.model('Project', projectSchema);
