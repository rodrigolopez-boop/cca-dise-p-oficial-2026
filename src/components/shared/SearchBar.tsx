"use client";

import { useState, type FormEvent } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSubmit: (query: string) => void;
  placeholder?: string;
  label?: string;
  className?: string;
}

export function SearchBar({
  onSubmit,
  placeholder = "Buscar en el portal",
  label = "Buscar",
  className,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(query.trim());
  };

  return (
    <form role="search" onSubmit={handleSubmit} className={cn("relative", className)}>
      <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label={label}
        className="h-10 w-full rounded-xl border border-white/15 bg-white/10 pl-10 pr-9 text-sm text-white outline-none transition-all placeholder:text-slate-300 focus:border-secondary/70 focus:bg-white/15 focus:ring-4 focus:ring-secondary/10"
      />
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          aria-label="Limpiar búsqueda"
          className="absolute right-2 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="size-3.5" aria-hidden />
        </button>
      )}
    </form>
  );
}
