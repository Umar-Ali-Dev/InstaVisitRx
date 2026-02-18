"use client";

import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import InputField from "../../component/ui/inputs/InputField";
import { AuthButton } from "../../component/ui/button/AuthButton";
import Heading from "../../component/ui/headings/Heading";

interface LoginPageProps {
  onNavigate: (page: "forgotPassword" | "signUp") => void;
  onLoginSuccess: (email: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  onNavigate,
  onLoginSuccess,
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: any) => {
    const loadToast = toast.loading("Checking credentials...");
    setTimeout(() => {
      toast.success("Credentials accepted!", { id: loadToast });
      onLoginSuccess(data.email);
    }, 1000);
  };

  return (
    <>
      <Heading title="Login" className="mb-6" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <InputField
            label="Email"
            name="email"
            type="email"
            control={control}
            required
            placeholder="email@example.com"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            control={control}
            required
            placeholder="Enter password"
          />
        </div>
        <div className="flex justify-end mt-2">
          <button
            type="button"
            onClick={() => onNavigate("forgotPassword")}
            className="text-[#F76D00] text-[14px] font-bold hover:underline"
          >
            Forgot password?
          </button>
        </div>
        <div className="mt-4">
          <AuthButton type="submit" label="Login" />
        </div>
      </form>
      <div className="mt-6 text-center text-[14px] text-[#999999]">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => onNavigate("signUp")}
          className="text-[#705295] font-bold hover:underline"
        >
          Sign Up
        </button>
      </div>
    </>
  );
};

export default LoginPage;
