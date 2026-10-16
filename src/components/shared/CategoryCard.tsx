import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  meta?: React.ReactNode;
  onSelect?: () => void;
  className?: string;
}

export function CategoryCard({
  title,
  description,
  icon,
  meta,
  onSelect,
  className,
}: CategoryCardProps) {
  return (
    <Card
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (onSelect && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "group h-full gap-0 rounded-2xl p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover",
        onSelect && "cursor-pointer",
        className
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-secondary dark:bg-primary/25 dark:text-blue-100 dark:group-hover:text-primary">
        {icon}
      </span>
      <h3 className="mt-4 font-display text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {meta && <div className="mt-4 text-xs font-semibold text-primary dark:text-blue-200">{meta}</div>}
    </Card>
  );
}
