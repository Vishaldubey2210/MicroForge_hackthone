exports.generate = (schemaData) => {
  const { name, fields = [] } = schemaData;
  const className = name.charAt(0).toUpperCase() + name.slice(1);

  let output = `from pydantic import BaseModel, Field\nfrom typing import Optional, Dict, Any\nfrom datetime import datetime\n\n`;
  output += `class ${className}(BaseModel):\n`;

  fields.forEach(f => {
    let pyType = 'str';
    if (f.type === 'Number') pyType = 'int';
    if (f.type === 'Boolean') pyType = 'bool';
    if (f.type === 'Date') pyType = 'datetime';
    if (f.type === 'Json') pyType = 'Dict[str, Any]';

    if (!f.required) {
      output += `    ${f.name}: Optional[${pyType}] = None\n`;
    } else {
      output += `    ${f.name}: ${pyType}\n`;
    }
  });

  output += `\n    class Config:\n        from_attributes = True\n`;
  return output;
};
