const prisma = require('../generators/prismaGenerator');
const ts = require('../generators/typescriptGenerator');

describe('Generator Suite 265', () => {
  test('generates valid prisma output', () => {
    const schema = { name: 'Product', fields: [{ name: 'price', type: 'Number' }] };
    const res = prisma.generate(schema);
    expect(res).toContain('model Product');
  });
});
