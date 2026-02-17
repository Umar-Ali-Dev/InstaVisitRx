"use client";

import { useState } from "react";
import {
  Controller,
  type FieldValues,
  type Control,
  type Path,
} from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ErrorsMessage from "./ErrorMessage";

export interface InputFieldProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  type: "text" | "password" | "email" | "number" | "tel" | "date" | "";
  placeholder?: string;
  required?: boolean;
  className?: string;
  height?: string;
  hideStar?: boolean;
  readOnly?: boolean;
  rules?: Record<string, any>;
  onChange?: (value: any) => void;
  disabled?: boolean;
}

const InputField = <T extends FieldValues>({
  label,
  name,
  control,
  type,
  required = false,
  className,
  height,
  placeholder,
  hideStar = false,
  readOnly = false,
  rules = {},
  onChange: customOnChange,
  disabled = false,
}: InputFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputHeight = height || "h-[56px]"; // Standard Figma height
  const isPasswordType = type === "password";

  return (
    <div className={`relative w-full ${className || ""}`}>
      <Controller
        name={name}
        control={control}
        rules={{
          ...(required ? { required: `${label} is required` } : {}),
          ...(type === "email"
            ? {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              }
            : {}),
          ...rules,
        }}
        render={({ field, fieldState: { error } }) => {
          const hasError = !!error;

          return (
            <div className="relative w-full">
              <input
                {...field}
                id={String(name)}
                type={
                  isPasswordType ? (showPassword ? "text" : "password") : type
                }
                placeholder=" " // Keep empty for peer-placeholder-shown to work
                readOnly={readOnly}
                disabled={disabled}
                className={`
                  peer w-full rounded-lg px-4 pt-5 pb-2 text-[14px] font-normal outline-none transition-all
                  ${inputHeight}
                  bg-white
                  border
                  ${hasError ? "border-red-500" : "border-[#E7E8E9]"}
                  focus:border-primary-500 /* Change 'primary-500' to your brand color */
                  
                  ${disabled ? "bg-gray-50 cursor-not-allowed text-gray-400" : "text-black"}
                  ${isPasswordType ? "pr-12" : ""}
                `}
                value={field.value ?? ""}
                onChange={(e) => {
                  field.onChange(e);
                  if (customOnChange) customOnChange(e.target.value);
                }}
              />

              {/* Floating Label */}
              <label
                htmlFor={String(name)}
                className={`
                  absolute left-4 top-1/2 -translate-y-1/2 z-10 origin-left transform 
                  text-[14px] font-normal duration-200 pointer-events-none
                  text-[#B3B7BB]
                  
                  /* When focused or input has content, move to top */
                  peer-focus:-translate-y-[130%] peer-focus:scale-[0.85] peer-focus:text-gray-500
                  peer-[:not(:placeholder-shown)]:-translate-y-[130%] peer-[:not(:placeholder-shown)]:scale-[0.85]
                `}
              >
                {label}
                {required && !hideStar && (
                  <span className="ml-1 text-red-500">*</span>
                )}
              </label>

              {/* Password Toggle */}
              {isPasswordType && !readOnly && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B3B7BB] hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <FaEye size={18} />
                  ) : (
                    <FaEyeSlash size={18} />
                  )}
                </button>
              )}

              {/* Error Message */}
              {error && (
                <div className="mt-1">
                  <ErrorsMessage
                    title={error.message}
                    className="text-[12px] text-red-500"
                  />
                </div>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default InputField;
