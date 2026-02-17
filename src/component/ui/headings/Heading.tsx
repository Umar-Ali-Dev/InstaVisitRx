// Heading.tsx
import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  className?: string;
}

export const Heading = ({
  children,
  fontSize = "text-[32px]",
  color = "text-[#001529]",
  className = "",
}: HeadingProps) => {
  return (
    <h1 className={`${fontSize} ${color} font-bold mb-8 ${className}`}>
      {children}
    </h1>
  );
};
