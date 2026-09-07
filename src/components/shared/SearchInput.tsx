"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

/** Buscador reutilizable con icono y accesible por teclado. */
export function SearchInput({ value, onChange, placeholder = "Buscar...", label }: SearchInputProps) {
  const id = `search-${label ?? placeholder}`.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="relative w-full max-w-md">
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden
      />
      <input
        id={id}
        type="search"
        role="searchbox"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-11 pr-5 text-sm text-ink-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10"
      />
    </div>
  );
}
