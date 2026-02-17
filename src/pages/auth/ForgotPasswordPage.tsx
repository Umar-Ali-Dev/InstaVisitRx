"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import InputField from "../../component/ui/inputs/InputField";
import { AuthButton } from "../../component/ui/button/AuthButton";
import Heading from "../../component/ui/headings/Heading";

interface ForgotPasswordPageProps {
  form: UseFormReturn<{
    email: string;
  }>;
  onSubmit: (data: { email: string }) => void;
  onBack: () => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  form,
  onSubmit,
  onBack,
}) => {
  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="text-[#0A1E25] hover:text-[#705295] transition-colors"
        >
          <FaArrowLeft size={20} />
        </button>
        <Heading title="Forgot password?"/>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <InputField
            label="Email address"
            name="email"
            type="email"
            control={form.control}
            placeholder="e.g. abc_john@email.com"
            required
            className="!pt-0"
          />
        </div>

        <div className="mt-4">
          <AuthButton type="submit" label="Next" />
        </div>
      </form>
    </>
  );
};

export default ForgotPasswordPage;
