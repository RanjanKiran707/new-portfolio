import { useState, useEffect } from 'react';
import { Spotlight } from './components/Spotlight';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Archive } from './components/Archive';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isArchiveView, setIsArchiveView] = useState<boolean>(() => {
    return window.location.hash === '#archive';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const isArchive = window.location.hash === '#archive';
      setIsArchiveView((prev) => {
        if (!prev && isArchive) {
          window.scrollTo(0, 0);
        }
        return isArchive;
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isArchiveView) return;

    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 250;

      // If user has scrolled to the bottom of the page, activate the last section
      if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isArchiveView]);

  const handleOpenArchive = () => {
    window.location.hash = '#archive';
    window.scrollTo(0, 0);
  };

  const handleCloseArchive = () => {
    window.location.hash = '';
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-400">
      {/* Dynamic Cursor Spotlight Follower */}
      <Spotlight />

      {isArchiveView ? (
        <Archive onBack={handleCloseArchive} />
      ) : (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header activeSection={activeSection} />

            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              <About />
              <Experience />
              <Projects onViewArchive={handleOpenArchive} />
              <Footer />
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
