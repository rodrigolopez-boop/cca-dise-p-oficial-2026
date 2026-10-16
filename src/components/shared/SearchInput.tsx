"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export function SearchInput({
  value,
  onChange,
  placeholder = "Buscar...",
  label,
  className,
}: SearchInputProps) {
  const id = `search-${label ?? placeholder}`.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
      <Input
        id={id}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={label ?? placeholder}
        className="h-12 rounded-xl border-border bg-card pl-11 shadow-sm placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}
