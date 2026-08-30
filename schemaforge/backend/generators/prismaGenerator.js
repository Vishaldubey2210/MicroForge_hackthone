exports.generate = (schemaData) => {
  const { name, fields = [], timestamps = true } = schemaData;
  const modelName = name.charAt(0).toUpperCase() + name.slice(1);

  let output = `model ${modelName} {\n`;
  output += `  id        String   @id @default(uuid())\n`;

  fields.forEach(f => {
    let type = 'String';
    if (f.type === 'Number') type = 'Int';
    if (f.type === 'Boolean') type = 'Boolean';
    if (f.type === 'Date') type = 'DateTime';
    if (f.type === 'Json') type = 'Json';

    const optional = f.required ? '' : '?';
    const unique = f.unique ? ' @unique' : '';
    const def = f.defaultValue !== undefined && f.defaultValue !== '' ? ` @default(${f.defaultValue})` : '';

    output += `  ${f.name.padEnd(10)} ${type}${optional}${unique}${def}\n`;
  });

  if (timestamps) {
    output += `  createdAt DateTime @default(now())\n`;
    output += `  updatedAt DateTime @updatedAt\n`;
  }
  output += `}\n`;
  return output;
};
