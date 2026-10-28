import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  AlertTriangle, 
  Rocket, 
  Code2, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-4">Project Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md">
          The requested project details could not be found or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  // Find next and prev project for quick switching
  const currentIndex = portfolioData.projects.findIndex((p) => p.id === id);
  const nextProject = portfolioData.projects[(currentIndex + 1) % portfolioData.projects.length];
  const prevProject = portfolioData.projects[(currentIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length];

  return (
    <div className="min-h-screen pt-28 pb-20 relative">
      {/* Background radial glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors p-2 -ml-2 rounded-lg hover:bg-slate-900/60"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-500/15 text-sky-400 border border-sky-500/30">
              {project.category}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Verified & Tested
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Action Buttons: Live Link & GitHub Client Repo */}
        <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-slate-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 active:scale-95 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Project Preview</span>
            </a>
          )}

          {project.clientGithub && (
            <a
              href={project.clientGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 active:scale-95 transition-all"
            >
              <Github className="w-4 h-4 text-sky-400" />
              <span>GitHub Client Repository</span>
            </a>
          )}
        </div>

        {/* Project Featured Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-12 bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* 1. Brief & In-depth Description */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 text-sky-400">
                <Code2 className="w-5 h-5" />
                <h2 className="text-xl font-bold text-white">Project Overview & Architecture</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.fullDescription}
              </p>
            </div>

            {/* 2. Challenges Faced While Developing */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400">
                <AlertTriangle className="w-5 h-5" />
                <h2 className="text-xl font-bold text-white">Challenges Faced & Solutions</h2>
              </div>
              <p className="text-slate-400 text-sm">
                Key technical bottlenecks and edge cases encountered during the development lifecycle:
              </p>
              <div className="space-y-3 pt-1">
                {project.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                    <span className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Potential Improvements & Future Plans */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 text-emerald-400">
                <Rocket className="w-5 h-5" />
                <h2 className="text-xl font-bold text-white">Potential Improvements & Future Plans</h2>
              </div>
              <p className="text-slate-400 text-sm">
                Strategic roadmap features planned for upcoming version releases:
              </p>
              <div className="space-y-3 pt-1">
                {project.futurePlans.map((plan, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {plan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar: Main Tech Stack Used & Quick Specs */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Tech Stack Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-sky-400">
                <Layers className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">Main Technology Stack</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Core technologies, libraries, and frameworks powering this project:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/90 text-sky-300 border border-slate-700/80 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Metadata Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                Project Information
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Category</span>
                  <span className="font-semibold text-white">{project.category}</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Client Codebase</span>
                  <span className="font-semibold text-emerald-400">Available on GitHub</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-400">Deployment</span>
                  <span className="font-semibold text-sky-400">Live Production</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-slate-400">Responsive UI</span>
                  <span className="font-semibold text-emerald-400">Mobile & Desktop</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-950/40 to-slate-900 border border-sky-800/30 shadow-xl space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Want to test it out?</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Visit the deployed live web app or review the client-side code on GitHub.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-colors shadow-md shadow-sky-500/20"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live Demo</span>
                  </a>
                )}
                {project.clientGithub && (
                  <a
                    href={project.clientGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-sky-400" />
                    <span>View Client Repo</span>
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Navigation between Projects */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to={`/project/${prevProject.id}`}
            className="w-full sm:w-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: {prevProject.title.split('-')[0]}</span>
          </Link>

          <Link
            to="/#projects"
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            All Projects Grid
          </Link>

          <Link
            to={`/project/${nextProject.id}`}
            className="w-full sm:w-auto inline-flex items-center justify-end gap-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 text-xs font-semibold transition-colors"
          >
            <span>Next: {nextProject.title.split('-')[0]}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}

