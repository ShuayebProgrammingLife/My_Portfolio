import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Facebook, Code2, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialItems = [
    { name: 'GitHub', url: socialLinks.github, icon: Github },
    { name: 'LinkedIn', url: socialLinks.linkedin, icon: Linkedin },
    { name: 'Twitter', url: socialLinks.twitter, icon: Twitter },
    { name: 'Facebook', url: socialLinks.facebook, icon: Facebook },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#070B14] text-slate-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">
                <Code2 className="w-4 h-4" />
              </div>
              <span>
                {personal.name.split(' ')[0]}
                <span className="text-sky-400">.dev</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm text-center md:text-left">
              {personal.designation} • Building responsive, user-centered web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            {socialItems.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white transition-all shadow-sm"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
}

