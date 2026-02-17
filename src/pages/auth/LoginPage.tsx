"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import InputField from "../../component/ui/inputs/InputField";
import { AuthButton } from "../../component/ui/button/AuthButton";
import Heading from "../../component/ui/headings/Heading";

interface LoginPageProps {
  form: UseFormReturn<{
    email: string;
    password: string;
  }>;
  onSubmit: (data: { email: string; password: string }) => void;
  onForgotPasswordClick: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  form,
  onSubmit,
  onForgotPasswordClick,
}) => {
  return (
    <>
      <Heading title="Login" className="mb-6" />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <InputField
            label="email"
            name="email"
            type="email"
            control={form.control}
            placeholder="e.g. abc_john@email.com"
            required
            className="!pt-0"
          />
          <InputField
            label="password enter"
            name="password"
            type="password"
            control={form.control}
            placeholder="Enter password"
            required
            className="!pt-0"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative">
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={onForgotPasswordClick}
                className="text-[#F76D00] text-[14px] font-bold hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <AuthButton type="submit" label="Login" />
        </div>
      </form>
    </>
  );
};

export default LoginPage;
