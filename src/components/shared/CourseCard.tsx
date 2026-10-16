import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: React.ReactNode;
  meta?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  actionDisabled?: boolean;
  className?: string;
}

export function CourseCard({
  title,
  description,
  icon,
  badge,
  meta,
  actionLabel,
  onAction,
  actionDisabled = false,
  className,
}: CourseCardProps) {
  return (
    <Card className={cn("group h-full gap-0 rounded-2xl p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover", className)}>
      <div className="flex items-start justify-between gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-secondary transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
          {icon}
        </span>
        {badge}
      </div>
      <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {meta && <div className="mt-4 text-sm text-muted-foreground">{meta}</div>}
      {actionLabel && onAction && (
        <Button type="button" onClick={onAction} disabled={actionDisabled} className="mt-6 w-full" variant="outline">
          {actionLabel}
        </Button>
      )}
    </Card>
  );
}
