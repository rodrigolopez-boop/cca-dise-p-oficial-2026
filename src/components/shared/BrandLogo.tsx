import Image from "next/image";
import logo from "@/assets/logo-blanco.png";
import { cn } from "@/lib/utils";

export function BrandLogo({
  inverse = false,
  compact = false,
  className,
  height,
}: {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
  height?: number;
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={logo}
        alt="CCA Logo"
        unoptimized
        loading="eager"
        style={height ? { height } : undefined}
        className={cn(
          "w-auto object-contain",
          !height && (compact ? "h-8" : "h-11"),
          inverse && "drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]"
        )}
      />
    </span>
  );
}
