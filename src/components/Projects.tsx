import React from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  onViewArchive: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onViewArchive }) => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {FEATURED_PROJECTS.map((project, index) => {
            const primaryLink = project.link || project.githubUrl;

            return (
              <li key={index} className="mb-12">
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  {/* Hover backdrop glow */}
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                  {/* Left Column Screenshot / Tag */}
                  {project.image ? (
                    <img
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      width="200"
                      height="125"
                      decoding="async"
                      className="z-10 aspect-video rounded border-2 border-slate-200/10 object-cover object-top transition group-hover:border-slate-200/30 sm:col-span-2"
                      src={project.image}
                    />
                  ) : (
                    <div className="z-10 sm:col-span-2 mt-1">
                      <div className="inline-flex items-center gap-1.5 rounded border border-slate-700/60 bg-slate-800/40 px-2.5 py-1 text-xs font-mono text-slate-400">
                        <span>0{index + 1}</span>
                        <span>•</span>
                        <span>APP</span>
                      </div>
                    </div>
                  )}

                  {/* Right Column Content */}
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        {primaryLink ? (
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                            href={primaryLink}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${project.title} (opens in a new tab)`}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                              {project.title}{' '}
                              <span className="inline-block">
                                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                              </span>
                            </span>
                          </a>
                        ) : (
                          <span className="text-base text-slate-200">{project.title}</span>
                        )}
                      </div>
                    </h3>

                    <p className="mt-2 text-sm leading-normal text-slate-400">
                      {project.description}
                    </p>

                    {/* Secondary action links (Live Demo + GitHub) */}
                    <div className="mt-2 flex items-center gap-4 text-xs font-medium text-slate-400">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="relative z-10 inline-flex items-center gap-1 hover:text-teal-300 transition-colors"
                          aria-label={`${project.title} live preview`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="relative z-10 inline-flex items-center gap-1 hover:text-teal-300 transition-colors"
                          aria-label={`${project.title} source code on GitHub`}
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>

                    {/* Skills pills */}
                    <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                      {project.skills.map((skill, sIdx) => (
                        <li key={sIdx} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {skill}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* View full project archive */}
        <div className="mt-12">
          <button
            onClick={onViewArchive}
            className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base cursor-pointer"
            aria-label="View Full Project Archive"
          >
            <span>
              View Full Project{' '}
              <span className="inline-block">
                Archive
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
