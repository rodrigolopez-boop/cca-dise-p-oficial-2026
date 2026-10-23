"use client";

import { useEffect, useState } from "react";
import { ConcentricSpinner } from "@/components/shared/ConcentricSpinner";
import { cn } from "@/lib/utils";

const MIN_VISIBLE_MS = 1500;
const MAX_WAIT_MS = 5000;
const EXIT_MS = 700;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let finished = false;
    let minTimer: number | undefined;
    let exitTimer: number | undefined;
    const startedAt = Date.now();

    const exit = () => {
      if (finished) return;
      finished = true;
      setLeaving(true);
      exitTimer = window.setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
      }, EXIT_MS);
    };

    const scheduleExit = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt));
      minTimer = window.setTimeout(exit, wait);
    };

    document.body.style.overflow = "hidden";
    const capTimer = window.setTimeout(exit, MAX_WAIT_MS);

    if (document.readyState === "complete") {
      scheduleExit();
    } else {
      window.addEventListener("load", scheduleExit, { once: true });
    }

    return () => {
      window.clearTimeout(capTimer);
      window.clearTimeout(minTimer);
      window.clearTimeout(exitTimer);
      window.removeEventListener("load", scheduleExit);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="site-preloader"
      role="status"
      aria-live="polite"
      aria-label="Cargando el portal"
      className={cn(
        "fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-ink-950 transition-opacity duration-700 ease-out",
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <noscript>
        <style>{`#site-preloader{display:none!important}`}</style>
      </noscript>

      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[110px]"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-1/2 size-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/15 blur-[90px]"
        aria-hidden
      />

      <div
        className={cn(
          "relative transition-all duration-700 ease-out",
          leaving && "-translate-y-3 scale-95 opacity-0"
        )}
      >
        <ConcentricSpinner className="h-36 w-36 sm:h-40 sm:w-40" label="Cargando el portal" />
      </div>
    </div>
  );
}
