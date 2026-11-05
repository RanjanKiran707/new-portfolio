import React from 'react';
import { ALL_PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';

interface ArchiveProps {
  onBack: () => void;
}

export const Archive: React.FC<ArchiveProps> = ({ onBack }) => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          onBack();
        }}
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
      >
        <ArrowLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-2" />
        {PERSONAL_INFO.name}
      </a>

      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects
      </h1>
      <p className="mt-2 text-sm text-slate-400">
        A complete archive of things I’ve built, experimented with, and released.
      </p>

      <table className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 md:table-cell">Made at</th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Built with</th>
            <th className="py-4 text-sm font-semibold text-slate-200">Link</th>
          </tr>
        </thead>
        <tbody>
          {ALL_PROJECTS.map((proj, idx) => {
            const link = proj.link || proj.githubUrl;
            return (
              <tr
                key={idx}
                className="border-b border-slate-300/10 transition hover:bg-slate-800/40"
              >
                {/* Year */}
                <td className="py-4 pr-8 align-top text-sm font-mono text-slate-400">
                  {proj.year}
                </td>

                {/* Project Title */}
                <td className="py-4 pr-8 align-top font-semibold leading-snug text-slate-200">
                  <div className="block sm:hidden">
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                      >
                        <span>
                          {proj.title}
                          <ArrowUpRight className="inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 ml-1" />
                        </span>
                      </a>
                    ) : (
                      <span>{proj.title}</span>
                    )}
                  </div>
                  <div className="hidden sm:block">{proj.title}</div>
                </td>

                {/* Made At */}
                <td className="hidden py-4 pr-8 align-top text-sm text-slate-400 md:table-cell">
                  {proj.madeAt || 'Personal'}
                </td>

                {/* Built with */}
                <td className="hidden py-4 pr-8 align-top lg:table-cell">
                  <ul className="flex flex-wrap gap-1.5">
                    {proj.skills.map((skill, sIdx) => (
                      <li key={sIdx}>
                        <span className="inline-flex items-center rounded-full bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium leading-5 text-teal-300">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </td>

                {/* Links */}
                <td className="py-4 align-top text-sm">
                  <div className="flex items-center gap-3">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-baseline font-medium leading-tight text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                        aria-label={`${proj.title} live demo`}
                      >
                        <span className="hidden sm:inline">
                          {proj.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        </span>
                        <ArrowUpRight className="inline-block h-3.5 w-3.5 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 ml-1" />
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                        aria-label={`${proj.title} GitHub repository`}
                        title="GitHub Repo"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
