"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../../component/ui/inputs/InputField";
import { Heading } from "../../component/ui/headings/Heading";
import { AuthButton } from "../../component/ui/button/AuthButton";
import PageHeader from "../../component/ui/headings/PageHeader";

const AuthModal = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
  };

  return (
    /* Centering Container */
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 p-4">
      {/* Modal Card */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <PageHeader title="Login" className="mb-6" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            <InputField
              label="email"
              name="email"
              type="email"
              control={control}
              placeholder="e.g. abc_john@email.com"
              required
              className="!pt-0"
            />
            <InputField
              label="password enter"
              name="password"
              type="password"
              control={control}
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
                  className="text-[#FF7A00] text-[14px] font-bold hover:underline"
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
      </div>
    </div>
  );
};

export default AuthModal;
