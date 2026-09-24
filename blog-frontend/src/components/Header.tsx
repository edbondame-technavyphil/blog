import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 text-white py-6 shadow-md">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">DevBlog</h1>
        <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-slate-700">
          Rails + Mongo + React + Tailwind v4
        </span>
      </div>
    </header>
  );
};