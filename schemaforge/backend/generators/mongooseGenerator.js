exports.generate = (schemaData) => {
  const { name, fields = [], timestamps = true } = schemaData;
  const modelName = name.charAt(0).toUpperCase() + name.slice(1);

  let output = `const mongoose = require('mongoose');\n\n`;
  output += `const ${name}Schema = new mongoose.Schema({\n`;

  fields.forEach(f => {
    output += `  ${f.name}: {\n`;
    output += `    type: ${f.type === 'Number' ? 'Number' : f.type === 'Boolean' ? 'Boolean' : f.type === 'Date' ? 'Date' : 'String'},\n`;
    if (f.required) output += `    required: true,\n`;
    if (f.unique) output += `    unique: true,\n`;
    if (f.defaultValue) output += `    default: '${f.defaultValue}',\n`;
    output += `  },\n`;
  });

  output += `}, { timestamps: ${timestamps} });\n\n`;
  output += `module.exports = mongoose.model('${modelName}', ${name}Schema);\n`;
  return output;
};
