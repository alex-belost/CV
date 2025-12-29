"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/toggle"; // Assuming this exists or will be created/used
import { useState } from "react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full glass border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container relative flex h-16 max-w-7xl items-center justify-between mx-auto px-4 md:px-8">
                {/* Logo Area */}
                <div className="flex items-center">
                    <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105 active:scale-95">
                        <span className="font-outfit font-bold text-lg tracking-tight text-foreground hidden sm:inline-block">
                            Oleksandr Bilostotskyi
                        </span>
                        <span className="font-outfit font-bold text-lg tracking-tight text-foreground sm:hidden">
                            OB
                        </span>
                    </Link>
                </div>

                {/* Centered Navigation (Desktop) - Absolutely Positioned */}
                <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-secondary/50 p-1.5 shadow-sm backdrop-blur-md border border-white/10 md:flex">
                    <ul className="flex items-center gap-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={cn(
                                            "relative px-5 py-2 text-sm font-medium transition-all duration-300 ease-out rounded-full",
                                            isActive
                                                ? "text-primary-foreground shadow-sm"
                                                : "text-muted-foreground hover:text-foreground"
                                        )}
                                    >
                                        {isActive && (
                                            <span className="absolute inset-0 z-[-1] rounded-full bg-primary/90 shadow-md" />
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
                            className="ml-2 inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:bg-accent hover:text-foreground focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border/40 bg-background">
                    <div className="space-y-1 px-4 py-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                                    pathname === item.href
                                        ? "bg-accent text-accent-foreground"
                                        : "text-foreground/60 hover:bg-accent hover:text-accent-foreground"
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
