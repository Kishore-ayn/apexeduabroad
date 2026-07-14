"use client";

import { useId } from "react";
import clsx from "clsx";

export default function WaveDivider({
  flip = false,
  topFill,
  className,
}: {
  flip?: boolean;
  /** Solid color painted behind the wave shape (e.g. "white") — use when the
   * divider sits on a background that would otherwise match the gradient
   * and make the wave invisible. Omit to let the surrounding background
   * show through (used when the divider sits inside a same-colored section). */
  topFill?: string;
  className?: string;
}) {
  const gradientId = useId();

  return (
    <div
      className={clsx(
        "h-14 w-full overflow-hidden sm:h-20",
        flip && "-scale-y-100",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4FD7" />
            <stop offset="25%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#CC0C84" />
            <stop offset="75%" stopColor="#FC5424" />
            <stop offset="100%" stopColor="#FC840C" />
          </linearGradient>
        </defs>
        {topFill && <rect width="1440" height="120" fill={topFill} />}
        <path
          d="M0,64 C240,112 480,8 720,48 C960,88 1200,16 1440,56 L1440,120 L0,120 Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
    </div>
  );
}
