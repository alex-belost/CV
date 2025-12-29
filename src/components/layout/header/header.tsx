'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/toggle'; // Assuming this exists or will be created/used
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="glass border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur-xl">
      <div className="relative container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo Area */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="font-outfit text-foreground hidden text-lg font-bold tracking-tight sm:inline-block">
              Oleksandr Bilostotskyi
            </span>
            <span className="font-outfit text-foreground text-lg font-bold tracking-tight sm:hidden">
              OB
            </span>
          </Link>
        </div>

        {/* Centered Navigation (Desktop) - Absolutely Positioned */}
        <nav className="bg-secondary/50 absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-white/10 p-1.5 shadow-sm backdrop-blur-md md:flex">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ease-out',
                      isActive
                        ? 'text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {isActive && (
                      <span className="bg-primary/90 absolute inset-0 z-[-1] rounded-full shadow-md" />
                    )}
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button
              className="text-foreground/60 hover:bg-accent hover:text-foreground ml-2 inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-border/40 bg-background border-t md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-accent text-accent-foreground'
                    : 'text-foreground/60 hover:bg-accent hover:text-accent-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
