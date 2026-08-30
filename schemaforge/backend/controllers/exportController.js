const archiver = require('archiver');
const prismaGen = require('../generators/prismaGenerator');
const tsGen = require('../generators/typescriptGenerator');

exports.exportZip = async (req, res) => {
  try {
    const { projectName = 'schemaforge-export', schemas = [] } = req.body;
    const archive = archiver('zip', { zlib: { level: 9 } });

    res.attachment(`${projectName}.zip`);
    archive.pipe(res);

    schemas.forEach(s => {
      archive.append(prismaGen.generate(s), { name: `prisma/${s.name}.prisma` });
      archive.append(tsGen.generate(s), { name: `types/${s.name}.ts` });
    });

    await archive.finalize();
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
