exports.generate = (schemaData) => {
  const { name, fields = [], timestamps = true } = schemaData;
  const tableName = name.toLowerCase() + 's';

  let output = `CREATE TABLE ${tableName} (\n`;
  output += `  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n`;

  fields.forEach(f => {
    let sqlCol = 'VARCHAR(255)';
    if (f.type === 'Number') sqlCol = 'INTEGER';
    if (f.type === 'Boolean') sqlCol = 'BOOLEAN';
    if (f.type === 'Date') sqlCol = 'TIMESTAMP WITH TIME ZONE';
    if (f.type === 'Json') sqlCol = 'JSONB';

    const req = f.required ? ' NOT NULL' : '';
    const unq = f.unique ? ' UNIQUE' : '';
    output += `  ${f.name} ${sqlCol}${req}${unq},\n`;
  });

  if (timestamps) {
    output += `  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,\n`;
    output += `  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP\n`;
  }
  output += `);\n`;
  return output;
};
