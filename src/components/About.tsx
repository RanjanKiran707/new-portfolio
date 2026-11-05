export const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div className="space-y-4 text-slate-400">
        <p>
          I am a Software Engineer with a solid computer science foundation, dedicated to engineering high-performance, resilient cross-platform applications. My core work revolves around the intersection of <span className="font-medium text-slate-200">Flutter internals</span>, <span className="font-medium text-slate-200">offline-first data synchronization</span>, and <span className="font-medium text-slate-200">hardware protocol communication</span>.
        </p>

        <p>
          Currently at <span className="font-medium text-slate-200">Aatmunn</span>, I architect production mobile systems that push beyond standard framework constraints. I’ve engineered custom multi-connection <span className="font-medium text-slate-200">Bluetooth Low Energy (BLE)</span> engines, built modular <span className="font-medium text-slate-200">store-and-forward</span> offline sync pipelines that guarantee 100% data integrity, and designed an <span className="font-medium text-slate-200">inter-isolate communication protocol</span> to manage concurrent background workloads smoothly.
        </p>

        <p>
          Prior to that, I led and delivered 4+ commercial mobile applications as sole developer at <span className="font-medium text-slate-200">AI Bharat</span> and engineered thermal ESC/POS printing integrations at <span className="font-medium text-slate-200">Kirana Fast</span>. I'm a strong advocate for clean architecture, functional programming paradigms with <span className="font-medium text-teal-300">fpdart</span>, and local-first databases like PowerSync and Drift. When I'm away from the keyboard, you'll find me solving algorithmic challenges on LeetCode or out running.
        </p>
      </div>
    </section>
  );
};
