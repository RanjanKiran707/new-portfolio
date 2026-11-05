import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {EXPERIENCES.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Hover backdrop glow */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                {/* Period */}
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label={exp.period}
                >
                  {exp.period}
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      {exp.companyUrl ? (
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${exp.role} at ${exp.company} (opens in a new tab)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                          <span>
                            {exp.role} ·{' '}
                            <span className="inline-block">
                              {exp.company}
                              <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                            </span>
                          </span>
                        </a>
                      ) : (
                        <span className="text-base text-slate-200">
                          {exp.role} · {exp.company}
                        </span>
                      )}
                    </div>
                  </h3>

                  <ul className="mt-2 text-sm leading-normal text-slate-400 space-y-2 list-disc list-outside ml-4">
                    {exp.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>

                  {/* Skills pill tags */}
                  <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                    {exp.skills.map((skill, sIdx) => (
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
          ))}
        </ol>

        {/* View full resume link */}
        <div className="mt-12">
          <a
            className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens PDF in a new tab)"
          >
            <span>
              View Full{' '}
              <span className="inline-block">
                Résumé
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
