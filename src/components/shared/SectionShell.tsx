import { cn } from "@/lib/utils";

interface SectionShellProps {
  children: React.ReactNode;
  id?: string;
  tone?: "default" | "soft" | "muted" | "dark";
  className?: string;
  contentClassName?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

export function SectionShell({
  children,
  id,
  tone = "default",
  className,
  contentClassName,
  ...aria
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-20 transition-colors duration-300 md:py-28",
        tone === "default" && "bg-background text-foreground",
        tone === "soft" && "bg-surface-soft text-foreground",
        tone === "muted" && "bg-surface text-foreground",
        tone === "dark" && "bg-dark-background text-white",
        className
      )}
      {...aria}
    >
      <div className={cn("relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", contentClassName)}>
        {children}
      </div>
    </section>
  );
}
