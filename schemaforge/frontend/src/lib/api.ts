const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchTemplates() {
  const res = await fetch(`${API_URL}/templates`);
  return res.json();
}

export async function compileCode(schema: any, target: string) {
  const res = await fetch(`${API_URL}/generators/compile`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ schema, target })
  });
  return res.json();
}
