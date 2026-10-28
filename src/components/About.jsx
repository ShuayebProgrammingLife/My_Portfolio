import React from 'react';
import { 
  Sparkles, 
  Compass, 
  Heart, 
  Smile, 
  Camera, 
  Activity, 
  Headphones, 
  Coffee, 
  CheckCircle,
  Lightbulb,
  Zap,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { aboutMe } = portfolioData;

  const hobbyIcons = {
    Camera: Camera,
    Activity: Activity,
    Headphones: Headphones,
    Coffee: Coffee,
  };

  const personalityPoints = [
    { title: "Curious & Self-Driven", desc: "Always exploring emerging frameworks, testing modern web standards, and sharpening coding patterns." },
    { title: "User-Centric Philosophy", desc: "Prioritizing snappy load times, semantic HTML, and fluid micro-interactions for the end user." },
    { title: "Team Collaborator", desc: "Comfortable with Git workflows, code reviews, constructive feedback, and cross-functional syncs." }
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER MY STORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & My Journey
          </h2>
          <p className="text-slate-400 text-base">
            Get an in-depth look into my coding roots, technical philosophy, and life beyond the screen.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Programming Journey & Work I Enjoy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Card 1: Journey */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-slate-700 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">My Programming Journey</h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {aboutMe.journey}
              </p>
            </div>

            {/* Card 2: The type of work I enjoy */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-slate-700 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">The Work I Enjoy Most</h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                {aboutMe.workEnjoyed}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                  <Zap className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                  <div className="text-xs font-semibold text-slate-200">High Performance</div>
                  <div className="text-[11px] text-slate-400">Fast & optimized web apps</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                  <Code className="w-5 h-5 text-sky-400 mx-auto mb-1.5" />
                  <div className="text-xs font-semibold text-slate-200">Clean Code</div>
                  <div className="text-[11px] text-slate-400">Modular & maintainable</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                  <Lightbulb className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                  <div className="text-xs font-semibold text-slate-200">Creative Solutions</div>
                  <div className="text-[11px] text-slate-400">Solving real-world friction</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Personality & Hobbies */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 3: Personality Showcase */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md group hover:border-slate-700 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <Smile className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Personality & Mindset</h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-sm mb-4">
                {aboutMe.personality}
              </p>

              <div className="space-y-3 pt-2">
                {personalityPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-800/40 border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">{point.title}</h4>
                      <p className="text-[12px] text-slate-400 mt-0.5 leading-snug">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 4: Hobbies & Interests Outside Programming */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md group hover:border-slate-700 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Hobbies & Interests</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutMe.hobbies.map((hobby, idx) => {
                  const Icon = hobbyIcons[hobby.icon] || Activity;
                  return (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5 text-sky-400">
                        <Icon className="w-4 h-4" />
                        <span className="text-xs font-semibold text-slate-200">{hobby.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug">
                        {hobby.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

