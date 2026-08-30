const fs = require('fs');
const path = require('path');

exports.getTemplates = (req, res) => {
  try {
    const templatesDir = path.join(__dirname, '../templates');
    const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.js'));
    const templates = files.map(f => require(path.join(templatesDir, f)));
    res.json({ success: true, count: templates.length, data: templates });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
