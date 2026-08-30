const prismaGen = require('../generators/prismaGenerator');
const mongooseGen = require('../generators/mongooseGenerator');
const postgresGen = require('../generators/postgresGenerator');
const tsGen = require('../generators/typescriptGenerator');
const zodGen = require('../generators/zodGenerator');
const pydanticGen = require('../generators/pydanticGenerator');
const gqlGen = require('../generators/graphqlGenerator');
const mockGen = require('../generators/mockjsonGenerator');

exports.generateCode = (req, res) => {
  try {
    const { schema, target = 'prisma' } = req.body;
    if (!schema || !schema.name) {
      return res.status(400).json({ success: false, message: 'Invalid schema payload' });
    }

    let code = '';
    switch (target.toLowerCase()) {
      case 'prisma': code = prismaGen.generate(schema); break;
      case 'mongoose': code = mongooseGen.generate(schema); break;
      case 'postgres': code = postgresGen.generate(schema); break;
      case 'typescript': code = tsGen.generate(schema); break;
      case 'zod': code = zodGen.generate(schema); break;
      case 'pydantic': code = pydanticGen.generate(schema); break;
      case 'graphql': code = gqlGen.generate(schema); break;
      case 'mock': code = mockGen.generate(schema); break;
      default:
        code = prismaGen.generate(schema);
    }

    res.json({ success: true, target, code });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
