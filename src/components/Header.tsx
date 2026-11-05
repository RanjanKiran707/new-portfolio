import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">{PERSONAL_INFO.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {PERSONAL_INFO.role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400 text-sm">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Scroll-spy Navigation (Desktop) */}
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    className="group flex items-center py-3"
                    href={`#${item.id}`}
                  >
                    <span
                      className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? 'w-16 bg-slate-200'
                          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200'
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? 'text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social Icons list */}
      <ul className="ml-1 mt-8 flex items-center gap-5 text-slate-400" aria-label="Social media">
        <li>
          <a
            className="block hover:text-slate-200 transition-colors"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            className="block hover:text-slate-200 transition-colors"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            className="block hover:text-slate-200 transition-colors"
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email Ranjan"
            title="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            className="block hover:text-slate-200 transition-colors"
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Resume PDF"
            title="Resume PDF"
          >
            <FileText className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
};
