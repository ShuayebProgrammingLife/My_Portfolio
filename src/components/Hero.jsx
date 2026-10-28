import React from 'react';
import { 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  ArrowRight, 
  MapPin, 
  Sparkles,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, socialLinks } = portfolioData;

  const socialItems = [
    { name: 'GitHub', url: socialLinks.github, icon: Github, hover: 'hover:text-white hover:border-slate-500 hover:bg-slate-800' },
    { name: 'LinkedIn', url: socialLinks.linkedin, icon: Linkedin, hover: 'hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10' },
    { name: 'Twitter', url: socialLinks.twitter, icon: Twitter, hover: 'hover:text-sky-300 hover:border-sky-400/50 hover:bg-sky-400/10' },
    { name: 'Facebook', url: socialLinks.facebook, icon: Facebook, hover: 'hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10' },
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status / Designation Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-900/80 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-300 font-mono">Specializing in</span>
              <span className="text-sky-400 font-semibold">{personal.designation}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl">
                {personal.tagline}
              </p>
            </div>

            {/* Short Bio */}
            <p className="text-slate-400 text-base leading-relaxed max-w-xl">
              {personal.heroBio}
            </p>

            {/* Location & Availability Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{personal.location}</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Sparkles className="w-4 h-4" />
                <span>{personal.availability}</span>
              </div>
            </div>

            {/* Action Buttons: Resume Download & Projects */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Requirement 3: Resume Download Button */}
              <a
                href={personal.resumeUrl}
                download="Shuayeb_Hossain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-lg shadow-sky-500/25 active:scale-95 transition-all group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </a>

              {/* View Projects CTA */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 active:scale-95 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* Requirement 4: Social Links */}
            <div className="pt-4 border-t border-slate-800/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 text-center lg:text-left">
                Connect With Me
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                {socialItems.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 text-xs font-medium transition-all ${social.hover}`}
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Hero Image / Professional Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Outer decorative gradient rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative w-72 sm:w-80 md:w-96 rounded-3xl p-3 bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-slate-800">
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-700 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-60"></div>

                  {/* Floating Pill on image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Full Stack Ready</div>
                        <div className="text-[11px] text-slate-400">Clean Architecture & Modern UI</div>
                      </div>
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                {/* Bottom badges */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between px-2 text-xs text-slate-400">
                  <span className="font-mono text-sky-400 font-medium">#openToWork</span>
                  <span className="font-mono text-slate-500">React • Node • Tailwind</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

