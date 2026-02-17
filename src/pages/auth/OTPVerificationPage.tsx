"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FaArrowLeft, FaRedoAlt } from "react-icons/fa";
import InputField from "../../component/ui/inputs/InputField";
import { AuthButton } from "../../component/ui/button/AuthButton";
import PageHeader from "../../component/ui/headings/PageHeader";

interface OTPVerificationPageProps {
  form: UseFormReturn<{
    otp: string;
  }>;
  onSubmit: (data: { otp: string }) => void;
  onBack: () => void;
  onResetOTP: () => void;
  userEmail: string;
}

const OTPVerificationPage: React.FC<OTPVerificationPageProps> = ({
  form,
  onSubmit,
  onBack,
  onResetOTP,
  userEmail,
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
        <PageHeader title="OTP verification" className="mb-0" />
      </div>
      <div className="mb-4">
        <p className="text-[14px] text-[#0A1E25]">
          We have sent an OTP code to your{" "}
          <span className="text-[#705295] font-semibold">
            {userEmail || "abcprovided@email.com"}
          </span>
          . Please verify.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <InputField
            label="One-Time Passcode"
            name="otp"
            type="text"
            control={form.control}
            placeholder="Enter OTP code"
            required
            className="!pt-0"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onResetOTP}
              className="flex items-center gap-2 text-[#F76D00] text-[14px] font-bold hover:underline"
            >
              <FaRedoAlt size={16} className="text-[#F76D00]" />
              Reset OTP
            </button>
          </div>
        </div>

        <div className="mt-4">
          <AuthButton type="submit" label="Verify" />
        </div>
      </form>
    </>
  );
};

export default OTPVerificationPage;
