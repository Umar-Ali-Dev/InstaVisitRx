"use client";

import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import InputField from "../../component/ui/inputs/InputField";
import SelectField from "../../component/ui/inputs/SelectField";
import { AuthButton } from "../../component/ui/button/AuthButton";
import Heading from "../../component/ui/headings/Heading";

interface SignUpPageProps {
  onNavigate: (page: "login") => void;
  onSignUpSuccess: (email: string) => void;
}

const SignUpPage: React.FC<SignUpPageProps> = ({
  onNavigate,
  onSignUpSuccess,
}) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const loadToast = toast.loading("Processing request...");
    setTimeout(() => {
      toast.success("Request processed!", { id: loadToast });
      onSignUpSuccess(data.email || "User");
    }, 1200);
  };

  return (
    <div className="max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
      <Heading title="Sign Up" className="mb-6 text-center" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="First name"
            name="firstName"
            type="text"
            control={control}
            placeholder="First name"
            required
          />
          <InputField
            label="Last name"
            name="lastName"
            type="text"
            control={control}
            placeholder="Last name"
            required
          />
        </div>
        <InputField
          label="Email address"
          name="email"
          type="email"
          control={control}
          placeholder="email@example.com"
          required
        />
        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          control={control}
          placeholder="(000) 000 0000"
          required
        />
        <SelectField
          label="Credentials"
          name="credentials"
          control={control}
          options={[{ value: "md", label: "MD" }]}
          placeholder="Select"
          required
        />
        <div className="mt-4">
          <AuthButton type="submit" label="Send Request" />
        </div>
      </form>
      <div className="mt-6 text-center text-[14px] text-[#999999] mb-4">
        Existing Account?{" "}
        <button
          type="button"
          onClick={() => onNavigate("login")}
          className="text-[#705295] font-bold hover:underline"
        >
          Sign In.
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
