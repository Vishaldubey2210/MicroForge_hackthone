exports.getStats = (req, res) => {
  res.json({
    success: true,
    data: {
      totalGenerations: 14250,
      supportedTargets: 18,
      activeProjects: 840,
      templatesCount: 15,
      systemStatus: 'optimal'
    }
  });
};
