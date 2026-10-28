import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  Palette, 
  Layout, 
  Globe, 
  Layers, 
  Server, 
  Cpu, 
  Database, 
  Flame, 
  Send, 
  DatabaseBackup,
  GitBranch, 
  Terminal, 
  Zap, 
  CheckCircle2, 
  Figma, 
  Cloud,
  CpuIcon,
  Wrench,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const iconMap = {
    Code2, FileCode, Palette, Layout, Globe, Layers,
    Server, Cpu, Database, Flame, Send, DatabaseBackup,
    GitBranch, Terminal, Zap, CheckCircle2, Figma, Cloud
  };

  const categories = [
    { id: 'all', name: 'All Skills', count: skills.frontend.length + skills.backend.length + skills.tools.length },
    { id: 'frontend', name: 'Frontend', count: skills.frontend.length, icon: Layout },
    { id: 'backend', name: 'Backend & DB', count: skills.backend.length, icon: Server },
    { id: 'tools', name: 'Tools & DevOps', count: skills.tools.length, icon: Wrench },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'frontend') return [{ category: 'Frontend Development', items: skills.frontend }];
    if (activeCategory === 'backend') return [{ category: 'Backend & Databases', items: skills.backend }];
    if (activeCategory === 'tools') return [{ category: 'Tools & Technologies', items: skills.tools }];
    return [
      { category: 'Frontend Development', items: skills.frontend },
      { category: 'Backend & Databases', items: skills.backend },
      { category: 'Tools & Technologies', items: skills.tools },
    ];
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-base">
            Categorized technical stack displayed in a graphical format highlighting my hands-on proficiencies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 ring-2 ring-sky-400/30'
                  : 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              <span>{cat.name}</span>
              <span className={`px-2 py-0.5 rounded-md text-xs ${
                activeCategory === cat.id ? 'bg-sky-600/80 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Display in Graphical Format */}
        <div className="space-y-12">
          {getFilteredSkills().map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              {activeCategory === 'all' && (
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-white tracking-wide">{group.category}</h3>
                  <div className="flex-1 h-px bg-slate-800"></div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-850 transition-all duration-300 shadow-md group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-800/80 text-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-500/20 transition-all">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[11px] font-medium text-slate-400">
                              {skill.status}
                            </span>
                          </div>
                        </div>

                        {/* Graphical percentage badge */}
                        <span className="font-mono text-xs font-semibold px-2 py-1 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Graphical Progress Bar */}
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden p-0.5">
                        <div
                          className="bg-gradient-to-r from-sky-500 to-indigo-500 h-full rounded-full transition-all duration-1000 group-hover:brightness-125"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

