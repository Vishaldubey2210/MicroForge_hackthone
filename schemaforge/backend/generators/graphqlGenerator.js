exports.generate = (schemaData) => {
  const { name, fields = [], timestamps = true } = schemaData;
  const typeName = name.charAt(0).toUpperCase() + name.slice(1);

  let output = `type ${typeName} {\n`;
  output += `  id: ID!\n`;

  fields.forEach(f => {
    let gqlType = 'String';
    if (f.type === 'Number') gqlType = 'Int';
    if (f.type === 'Boolean') gqlType = 'Boolean';
    if (f.type === 'Date') gqlType = 'String';
    if (f.type === 'Json') gqlType = 'JSON';

    const req = f.required ? '!' : '';
    output += `  ${f.name}: ${gqlType}${req}\n`;
  });

  if (timestamps) {
    output += `  createdAt: String!\n`;
    output += `  updatedAt: String!\n`;
  }
  output += `}\n\n`;
  output += `input Create${typeName}Input {\n`;
  fields.forEach(f => {
    let gqlType = f.type === 'Number' ? 'Int' : 'String';
    output += `  ${f.name}: ${gqlType}${f.required ? '!' : ''}\n`;
  });
  output += `}\n`;
  return output;
};
