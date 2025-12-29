"use client";

import { Profile } from "@/domain/types";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
                    "-=0.6"
                )
                .from(
                    buttonsRef.current,
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                    },
                    "-=0.4"
                )
                .from(
                    visualRef.current,
                    {
                        scale: 0.8,
                        opacity: 0,
                        duration: 1,
                        ease: "elastic.out(1, 0.5)",
                    },
                    "-=0.8"
                );
        },
        { scope: containerRef }
    );

    return (
        <section
            ref={containerRef}
            className="relative py-20 md:py-32 overflow-hidden"
        >
            {/* Background Elements Wrapper with Mask */}
            <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent)]">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-dot-pattern opacity-[0.15]" />

                {/* Background Gradient Blob - Reduced Opacity */}
                <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4">
                    <div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
                </div>
                <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/4">
                    <div className="h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[100px]" />
                </div>
            </div>

            <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center gap-12 max-w-6xl">
                <div className="flex-1 space-y-8 text-center md:text-left z-10">
                    <div className="space-y-4">
                        <h1 ref={titleRef} className="text-4xl font-extrabold tracking-tight lg:text-5xl xl:text-7xl">
                            Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">{profile.name}</span>
                        </h1>
                        <h2 className="text-2xl font-medium text-foreground/80">
                            {profile.title}
                        </h2>
                        <p
                            ref={textRef}
                            className="mx-auto md:mx-0 max-w-[700px] text-foreground/70 md:text-xl leading-relaxed"
                        >
                            {profile.summary}
                        </p>
                    </div>
                    <div
                        ref={buttonsRef}
                        className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95"
                        >
                            Contact Me
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:border-primary/50"
                        >
                            View Projects
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex justify-center md:justify-end z-10">
                    <div ref={visualRef} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Decorative rings */}
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border-2 border-primary/40 animate-[spin_15s_linear_infinite_reverse]" />

                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                            <div className="w-full h-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-7xl font-bold">
                                {profile.name.charAt(0)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
