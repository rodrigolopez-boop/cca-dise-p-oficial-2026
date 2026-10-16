import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  footer?: React.ReactNode;
  accent?: boolean;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  footer,
  accent = false,
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "group h-full gap-0 rounded-2xl border-border/80 bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover dark:bg-card/80",
        className
      )}
    >
      <span
        className={cn(
          "mb-5 flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105",
          accent
            ? "bg-secondary text-primary"
            : "bg-accent text-primary dark:bg-primary/25 dark:text-blue-100"
        )}
      >
        {icon}
      </span>
      <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {footer && <div className="mt-5">{footer}</div>}
    </Card>
  );
}
