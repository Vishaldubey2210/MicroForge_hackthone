const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  fieldName: {
    type: String,
    required: true,
    trim: true,
  },
  fieldType: {
    type: String,
    required: true,
    enum: ['String', 'Number', 'Boolean', 'Date', 'ObjectId', 'Array', 'Enum', 'Mixed'],
  },
  required: {
    type: Boolean,
    default: false,
  },
  unique: {
    type: Boolean,
    default: false,
  },
  defaultValue: {
    type: String,
    default: '',
  },
  ref: {
    type: String,
    default: '',
  },
  enumValues: {
    type: [String],
    default: [],
  },
  validation: {
    min: { type: Number, default: null },
    max: { type: Number, default: null },
    minLength: { type: Number, default: null },
    maxLength: { type: Number, default: null },
    match: { type: String, default: '' },
  },
  indexed: {
    type: Boolean,
    default: false,
  },
}, { _id: true });

const schemaDefinitionSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  name: {
    type: String,
    required: [true, 'Schema name is required'],
    trim: true,
    maxlength: 50,
  },
  fields: [fieldSchema],
  timestamps: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Index for project-based queries
schemaDefinitionSchema.index({ projectId: 1 });

module.exports = mongoose.model('SchemaDefinition', schemaDefinitionSchema);
