'use client';
import React from 'react';

export default function SchemaCard() {
  return (
    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
      <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">SchemaCard</h3>
      <p className="text-xs text-slate-400 mt-1">Visual schema card displaying field count and timestamp badges</p>
    </div>
  );
}
