"use client";

import React, { memo } from "react";
import { useTheme } from "next-themes";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors,
    speed = 2,
  }: AuroraTextProps) => {
    const { theme } = useTheme();

    const resolvedColors = colors ?? (theme === "light" ? ["#6B4CFF", "#D8436E"] : ["#A97CF8", "#F38CB8", "#FDCC92"]);

    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${resolvedColors.join(", ")}, ${
        resolvedColors[0]
      })`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    };

    return (
      <span className={`relative inline ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="font-semibold relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  },
);

AuroraText.displayName = "AuroraText";
