exports.generate = (schemaData) => {
  const { name, fields = [] } = schemaData;
  const schemaVar = name.charAt(0).toLowerCase() + name.slice(1) + 'Schema';

  let output = `import { z } from 'zod';\n\n`;
  output += `export const ${schemaVar} = z.object({\n`;

  fields.forEach(f => {
    let zType = 'z.string()';
    if (f.type === 'Number') zType = 'z.number()';
    if (f.type === 'Boolean') zType = 'z.boolean()';
    if (f.type === 'Date') zType = 'z.coerce.date()';
    if (f.type === 'Json') zType = 'z.record(z.unknown())';

    if (!f.required) zType += '.optional()';
    output += `  ${f.name}: ${zType},\n`;
  });

  output += `});\n\n`;
  output += `export type ${name.charAt(0).toUpperCase() + name.slice(1)} = z.infer<typeof ${schemaVar}>;\n`;
  return output;
};
