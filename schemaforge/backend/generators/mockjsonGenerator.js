exports.generate = (schemaData, count = 5) => {
  const { fields = [] } = schemaData;
  const records = [];

  for (let i = 1; i <= count; i++) {
    const item = { id: `uuid-${1000 + i}` };
    fields.forEach(f => {
      if (f.type === 'Number') item[f.name] = Math.floor(Math.random() * 500) + 1;
      else if (f.type === 'Boolean') item[f.name] = Math.random() > 0.5;
      else if (f.type === 'Date') item[f.name] = new Date().toISOString();
      else item[f.name] = `${f.name}_sample_${i}`;
    });
    records.push(item);
  }

  return JSON.stringify(records, null, 2);
};
