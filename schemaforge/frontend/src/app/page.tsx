'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FieldEditor from '../components/FieldEditor';
import CodePreview from '../components/CodePreview';
import VisualDiagram from '../components/VisualDiagram';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'prisma' | 'sql' | 'ts' | 'zod'>('prisma');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            ⚡ SchemaForge Engine v1.0
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Visual Schema Design & Multi-Target Compiler
          </h1>
          <p className="mt-3 text-slate-400 text-base max-w-2xl mx-auto">
            Design databases in real-time, generate production ORM schemas, and export bulletproof boilerplate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-6">
            <FieldEditor />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <VisualDiagram />
            <CodePreview />
          </div>
        </div>
      </main>
    </div>
  );
}
