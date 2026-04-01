const SchemaDefinition = require('../models/Schema');
const Project = require('../models/Project');

// @desc    Get all schemas for a project
// @route   GET /api/schemas/:projectId
exports.getSchemas = async (req, res, next) => {
  try {
    // Verify project belongs to user
    const project = await Project.findOne({
      _id: req.params.projectId,
      userId: req.user._id,
    });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    const schemas = await SchemaDefinition.find({ projectId: req.params.projectId })
      .sort('name');

    res.json({ success: true, data: schemas });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single schema
// @route   GET /api/schemas/detail/:id
exports.getSchema = async (req, res, next) => {
  try {
    const schema = await SchemaDefinition.findById(req.params.id);
    if (!schema) {
      return res.status(404).json({ success: false, message: 'Schema not found' });
    }

    // Verify ownership
    const project = await Project.findOne({
      _id: schema.projectId,
      userId: req.user._id,
    });
    if (!project) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    res.json({ success: true, data: schema });
  } catch (error) {
    next(error);
  }
};

// @desc    Create schema
// @route   POST /api/schemas
exports.createSchema = async (req, res, next) => {
  try {
    const { projectId, name, fields, timestamps } = req.body;

    // Verify project belongs to user
    const project = await Project.findOne({
      _id: projectId,
      userId: req.user._id,
    });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    // Check for duplicate schema name within the project
    const exists = await SchemaDefinition.findOne({ projectId, name });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: `Schema "${name}" already exists in this project`,
      });
    }

    const schema = await SchemaDefinition.create({
      projectId,
      name,
      fields: fields || [],
      timestamps: timestamps !== undefined ? timestamps : true,
    });

    res.status(201).json({ success: true, data: schema });
  } catch (error) {
    next(error);
  }
};

// @desc    Update schema
// @route   PUT /api/schemas/:id
exports.updateSchema = async (req, res, next) => {
  try {
    const { name, fields, timestamps } = req.body;

    const schema = await SchemaDefinition.findById(req.params.id);
    if (!schema) {
      return res.status(404).json({ success: false, message: 'Schema not found' });
    }

    // Verify ownership
    const project = await Project.findOne({
      _id: schema.projectId,
      userId: req.user._id,
    });
    if (!project) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    if (name) schema.name = name;
    if (fields) schema.fields = fields;
    if (timestamps !== undefined) schema.timestamps = timestamps;

    await schema.save();
    res.json({ success: true, data: schema });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete schema
// @route   DELETE /api/schemas/:id
exports.deleteSchema = async (req, res, next) => {
  try {
    const schema = await SchemaDefinition.findById(req.params.id);
    if (!schema) {
      return res.status(404).json({ success: false, message: 'Schema not found' });
    }

    // Verify ownership
    const project = await Project.findOne({
      _id: schema.projectId,
      userId: req.user._id,
    });
    if (!project) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    await SchemaDefinition.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Schema deleted' });
  } catch (error) {
    next(error);
  }
};
