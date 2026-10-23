"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Ring = {
  color: string;
  radius: number;
  rotationEnd: number;
  strokeWidth: number;
};

const SIZE = 100;
const CENTER = SIZE / 2;
const DURATION = 4200;
const EASE = "cubic-bezier(0.65, 0, 0.35, 1)";

const RINGS: Ring[] = [
  { color: "#ffd12e", radius: 48, rotationEnd: 270, strokeWidth: 4 },
  { color: "#38bdf8", radius: 38, rotationEnd: 540, strokeWidth: 3 },
  { color: "#f59e0b", radius: 31, rotationEnd: 135, strokeWidth: 2 },
  { color: "#93c5fd", radius: 26, rotationEnd: 63, strokeWidth: 2 },
  { color: "#ffd12e", radius: 21, rotationEnd: 63, strokeWidth: 2 },
  { color: "rgba(224, 242, 254, 0.45)", radius: 5, rotationEnd: 135, strokeWidth: 2 },
];

const SOLID_CIRCLES = [
  { color: "rgba(56, 189, 248, 0.4)", radius: 15 },
  { color: "rgba(255, 209, 46, 0.35)", radius: 15 },
];

const circumference = (radius: number) => 2 * Math.PI * radius;

export function ConcentricSpinner({
  className,
  label = "Cargando",
}: {
  className?: string;
  label?: string;
}) {
  const ringGroups = useRef<Array<SVGGElement | null>>([]);
  const rings = useRef<Array<SVGCircleElement | null>>([]);
  const solidCircles = useRef<Array<SVGCircleElement | null>>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animations: Animation[] = [];

    ringGroups.current.forEach((group, index) => {
      if (!group) return;
      const { rotationEnd } = RINGS[index];

      animations.push(
        group.animate(
          [
            { transform: "rotate(0deg)" },
            { transform: `rotate(${rotationEnd / 2}deg)` },
            { transform: `rotate(${rotationEnd}deg)` },
          ],
          { duration: DURATION, easing: "linear", iterations: Infinity }
        )
      );
    });

    rings.current.forEach((circle, index) => {
      if (!circle) return;
      const dash = circumference(RINGS[index].radius);

      animations.push(
        circle.animate(
          [
            { strokeDashoffset: 0, easing: EASE },
            { strokeDashoffset: -dash, easing: EASE },
            { strokeDashoffset: -2 * dash },
          ],
          { duration: DURATION, iterations: Infinity }
        )
      );
    });

    solidCircles.current.forEach((circle, index) => {
      if (!circle) return;
      const startsVisible = index % 2 === 0;

      animations.push(
        circle.animate(
          [
            { transform: `scale(${startsVisible ? 1 : 0})`, easing: EASE },
            { transform: `scale(${startsVisible ? 0 : 1})`, easing: EASE },
            { transform: `scale(${startsVisible ? 1 : 0})` },
          ],
          { duration: DURATION, iterations: Infinity }
        )
      );
    });

    return () => animations.forEach((animation) => animation.cancel());
  }, []);

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={cn("block h-auto w-40", className)}
      role="img"
      aria-label={label}
    >
      <g transform={`rotate(-90 ${CENTER} ${CENTER})`}>
        {SOLID_CIRCLES.map((circle, index) => (
          <circle
            key={`solid-${index}`}
            ref={(element) => {
              solidCircles.current[index] = element;
            }}
            cx={CENTER}
            cy={CENTER}
            r={circle.radius}
            fill={circle.color}
            style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
          />
        ))}

        {RINGS.map((ring, index) => {
          const dash = circumference(ring.radius);

          return (
            <g
              key={`ring-${index}`}
              ref={(element) => {
                ringGroups.current[index] = element;
              }}
              style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
            >
              <circle
                ref={(element) => {
                  rings.current[index] = element;
                }}
                cx={CENTER}
                cy={CENTER}
                r={ring.radius}
                fill="none"
                stroke={ring.color}
                strokeWidth={ring.strokeWidth}
                strokeDasharray={`${dash} ${dash}`}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
