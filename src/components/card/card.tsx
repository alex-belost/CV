import { Badge } from "@/components/badge";
import { cn } from "@/lib/utils";

interface CardProps {
    title: string;
    subtitle: string;
    date?: string;
    description: string;
    tags?: string[];
    link?: string;
    className?: string;
}

export function Card({ title, subtitle, date, description, tags, link, className }: CardProps) {
    return (
        <div className={cn("group flex flex-col gap-2", className)}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h4 className="text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors">
                    {link ? (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            {title}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                        </a>
                    ) : (
                        title
                    )}
                </h4>
                {date && <span className="text-sm font-medium text-foreground/50 whitespace-nowrap">{date}</span>}
            </div>

            {subtitle && <p className="text-sm font-medium text-foreground/70">{subtitle}</p>}

            <div className="text-foreground/80 leading-relaxed text-sm whitespace-pre-wrap mt-2">
                {description}
            </div>

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag) => (
                        <Badge key={tag} className="text-xs px-2 py-0.5 bg-foreground/5 hover:bg-foreground/10 text-foreground/70">
                            {tag}
                        </Badge>
                    ))}
                </div>
            )}
        </div>
    );
}
