// Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  bgColor?: string;
  height?: string;
  rounded?: string;
  width?: string;
}

export const AuthButton = ({
  label,
  bgColor = "bg-[#705295]",
  height = "h-[45px]",
  rounded = "rounded-xl",
  width = "w-full",
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${width} ${height} ${bgColor} ${rounded} text-white font-bold transition-opacity hover:opacity-90 active:scale-[0.99] disabled:opacity-50 ${className}`}
    >
      {label}
    </button>
  );
};
