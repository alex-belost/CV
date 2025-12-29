'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function Toggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to avoid hydration mismatch, same size as the real button
    return <div className="h-9 w-16" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'group focus-visible:ring-ring relative inline-flex h-9 w-16 cursor-pointer items-center rounded-full px-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        isDark
          ? 'bg-slate-800/50 ring-1 ring-slate-700/50 hover:bg-slate-800'
          : 'bg-sky-100 ring-1 ring-sky-200 hover:bg-sky-200'
      )}
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>

      {/* Track Icons - optional background decorations */}
      <div className="absolute inset-0 flex items-center justify-between px-2 text-[10px] font-bold tracking-wider uppercase">
        <span
          className={cn(
            'transform transition-all duration-300',
            isDark
              ? '-translate-x-2 text-yellow-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              : 'opacity-0'
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rotate-0"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </span>
        <span
          className={cn(
            'transform transition-all duration-300',
            isDark
              ? 'opacity-0'
              : 'translate-x-2 text-slate-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="-rotate-90"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>
      </div>

      {/* Thumb */}
      <span
        className={cn(
          'pointer-events-none relative flex h-7 w-7 items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-in-out',
          isDark
            ? 'translate-x-7 bg-slate-900 text-slate-200'
            : 'translate-x-0 bg-white text-yellow-500'
        )}
      >
        {/* Sun Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            'absolute transition-all duration-300',
            isDark
              ? 'scale-0 rotate-90 opacity-0'
              : 'scale-100 rotate-0 opacity-100'
          )}
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>

        {/* Moon Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            'absolute transition-all duration-300',
            isDark
              ? 'scale-100 rotate-0 opacity-100'
              : 'scale-0 -rotate-90 opacity-0'
          )}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
    </button>
  );
}
