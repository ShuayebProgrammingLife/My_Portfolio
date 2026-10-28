import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects ({projects.length})
          </h2>
          <p className="text-slate-400 text-base">
            A selection of my best web applications with live deployments, client codebases, and architectural breakdowns.
          </p>
        </div>

        {/* Project Cards Grid (At least 3 projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl overflow-hidden hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-slate-950/80 backdrop-blur-md text-sky-400 border border-slate-700/60 shadow">
                      {project.category}
                    </span>
                  </div>

                  {/* Direct Link Shortcuts */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-950/80 backdrop-blur-md text-white hover:text-sky-400 border border-slate-700/60 transition-colors"
                        title="Live Demo"
                        aria-label={`Live Demo of ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.clientGithub && (
                      <a
                        href={project.clientGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-950/80 backdrop-blur-md text-white hover:text-sky-400 border border-slate-700/60 transition-colors"
                        title="GitHub Client Repo"
                        aria-label={`GitHub Client of ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-slate-800/40 text-slate-400">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: "View More / Details" button */}
              <div className="p-6 pt-0">
                <Link
                  to={`/project/${project.id}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-sky-400 bg-sky-500/10 hover:bg-sky-500 hover:text-white border border-sky-500/30 hover:border-sky-500 transition-all duration-200 group/btn shadow-sm"
                >
                  <span>View More / Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

