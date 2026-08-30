exports.generate = (schemaData) => {
  const { name, fields = [], timestamps = true } = schemaData;
  const interfaceName = 'I' + name.charAt(0).toUpperCase() + name.slice(1);

  let output = `export interface ${interfaceName} {\n`;
  output += `  id: string;\n`;

  fields.forEach(f => {
    let tsType = 'string';
    if (f.type === 'Number') tsType = 'number';
    if (f.type === 'Boolean') tsType = 'boolean';
    if (f.type === 'Date') tsType = 'Date | string';
    if (f.type === 'Json') tsType = 'Record<string, unknown>';

    const opt = f.required ? '' : '?';
    output += `  ${f.name}${opt}: ${tsType};\n`;
  });

  if (timestamps) {
    output += `  createdAt: Date | string;\n`;
    output += `  updatedAt: Date | string;\n`;
  }
  output += `}\n\n`;
  output += `export type Create${name.charAt(0).toUpperCase() + name.slice(1)}DTO = Omit<${interfaceName}, 'id' | 'createdAt' | 'updatedAt'>;\n`;
  return output;
};
