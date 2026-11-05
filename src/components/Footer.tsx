export const Footer = () => {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
      <p>
        Coded in{' '}
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Visual Studio Code
        </a>{' '}
        by{' '}
        <span className="font-medium text-slate-300">Ranjan Padmakiran</span>. Design heavily inspired by{' '}
        <a
          href="https://brittanychiang.com/"
          className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Brittany Chiang
        </a>
        . Built with{' '}
        <a
          href="https://react.dev/"
          className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          React
        </a>{' '}
        and{' '}
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        . Typography set in the{' '}
        <a
          href="https://rsms.me/inter/"
          className="font-medium text-slate-400 hover:text-teal-300 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Inter
        </a>{' '}
        typeface.
      </p>
    </footer>
  );
};
