const Project = require('../models/Project');
const SchemaDefinition = require('../models/Schema');

// @desc    Get all projects for current user
// @route   GET /api/projects
exports.getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({ userId: req.user._id })
      .sort('-updatedAt')
      .lean();

    // Attach schema count to each project
    const projectIds = projects.map(p => p._id);
    const schemaCounts = await SchemaDefinition.aggregate([
      { $match: { projectId: { $in: projectIds } } },
      { $group: { _id: '$projectId', count: { $sum: 1 } } },
    ]);

    const countMap = {};
    schemaCounts.forEach(s => { countMap[s._id.toString()] = s.count; });

    const result = projects.map(p => ({
      ...p,
      schemaCount: countMap[p._id.toString()] || 0,
    }));

    res.json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single project
// @route   GET /api/projects/:id
exports.getProject = async (req, res, next) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    const schemas = await SchemaDefinition.find({ projectId: project._id });

    res.json({
      success: true,
      data: { ...project.toObject(), schemas },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create project
// @route   POST /api/projects
exports.createProject = async (req, res, next) => {
  try {
    const { name, description, dbType, settings } = req.body;

    const project = await Project.create({
      name,
      description,
      dbType,
      settings,
      userId: req.user._id,
    });

    res.status(201).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
exports.updateProject = async (req, res, next) => {
  try {
    const { name, description, dbType, settings } = req.body;

    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { name, description, dbType, settings },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete project
// @route   DELETE /api/projects/:id
exports.deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }

    // Delete all schemas associated with this project
    await SchemaDefinition.deleteMany({ projectId: project._id });

    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    next(error);
  }
};
