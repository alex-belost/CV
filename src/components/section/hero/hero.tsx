'use client';

import { Profile } from '@/domain/types';
import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      })
        .from(
          textRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.6'
        )
        .from(
          buttonsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          visualRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.5)',
          },
          '-=0.8'
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background Elements Wrapper with Mask */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden [mask-image:linear-gradient(to_bottom,black_60%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
        {/* Background Pattern */}
        <div className="bg-dot-pattern absolute inset-0 opacity-[0.15]" />

        {/* Background Gradient Blob - Reduced Opacity */}
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4">
          <div className="bg-primary/10 h-[500px] w-[500px] rounded-full blur-[120px]" />
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/4">
          <div className="h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>
      </div>

      <div className="container mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:px-6">
        <div className="z-10 flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1
              ref={titleRef}
              className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-7xl"
            >
              Hi, I&apos;m{' '}
              <span className="from-primary bg-gradient-to-r to-violet-500 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </h1>
            <h2 className="text-foreground/80 text-2xl font-medium">
              {profile.title}
            </h2>
            <p
              ref={textRef}
              className="text-foreground/70 mx-auto max-w-[700px] leading-relaxed md:mx-0 md:text-xl"
            >
              {profile.summary}
            </p>
          </div>
          <div
            ref={buttonsRef}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start"
          >
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground shadow-primary/25 hover:bg-primary/90 inline-flex h-12 items-center justify-center rounded-full px-8 text-sm font-medium shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              Contact Me
            </Link>
            <Link
              href="/projects"
              className="border-input bg-background/50 hover:bg-accent hover:text-accent-foreground hover:border-primary/50 inline-flex h-12 items-center justify-center rounded-full border px-8 text-sm font-medium shadow-sm backdrop-blur-sm transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="z-10 flex flex-1 justify-center md:justify-end">
          <div
            ref={visualRef}
            className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
          >
            {/* Decorative rings */}
            <div className="border-primary/20 absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-2" />
            <div className="border-primary/40 absolute inset-4 animate-[spin_15s_linear_infinite_reverse] rounded-full border-2" />

            <div className="border-background absolute inset-0 overflow-hidden rounded-full border-4 shadow-2xl">
              <div className="from-primary flex h-full w-full items-center justify-center bg-gradient-to-br to-blue-600 text-7xl font-bold text-white">
                {profile.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
