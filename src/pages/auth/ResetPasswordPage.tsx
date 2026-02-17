"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import InputField from "../../component/ui/inputs/InputField";
import { AuthButton } from "../../component/ui/button/AuthButton";
import PageHeader from "../../component/ui/headings/PageHeader";

interface ResetPasswordPageProps {
  form: UseFormReturn<{
    newPassword: string;
    confirmPassword: string;
  }>;
  onSubmit: (data: { newPassword: string; confirmPassword: string }) => void;
  onBack: () => void;
}

const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({
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
        <PageHeader title="Reset password" className="mb-0" />
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <InputField
            label="New password"
            name="newPassword"
            type="password"
            control={form.control}
            placeholder="Choose a strong password"
            required
            className="!pt-0"
          />
          <InputField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            control={form.control}
            placeholder="Re-enter new password"
            required
            className="!pt-0"
          />
        </div>

        <div className="mt-4">
          <AuthButton type="submit" label="Reset password" />
        </div>
      </form>
    </>
  );
};

export default ResetPasswordPage;
