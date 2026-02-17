"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginPage from "./LoginPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import OTPVerificationPage from "./OTPVerificationPage";
import ResetPasswordPage from "./ResetPasswordPage";
import instaVisitLogo from "../../assets/icons/instaVisit.svg";

type AuthPage = "login" | "forgotPassword" | "otpVerification" | "resetPassword";

const AuthModal = () => {
  const [currentPage, setCurrentPage] = useState<AuthPage>("login");
  const [userEmail, setUserEmail] = useState<string>("");

  // Login form
  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Forgot password form
  const forgotPasswordForm = useForm({
    defaultValues: {
      email: "",
    },
  });

  // OTP form
  const otpForm = useForm({
    defaultValues: {
      otp: "",
    },
  });

  // Reset password form
  const resetPasswordForm = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onLoginSubmit = (data: any) => {
    console.log("Login Submitted:", data);
  };

  const onForgotPasswordSubmit = (data: any) => {
    console.log("Forgot Password Submitted:", data);
    setUserEmail(data.email);
    setCurrentPage("otpVerification");
  };

  const onOTPSubmit = (data: any) => {
    console.log("OTP Submitted:", data);
    setCurrentPage("resetPassword");
  };

  const onResetPasswordSubmit = (data: any) => {
    console.log("Reset Password Submitted:", data);
    // After successful reset, go back to login
    setCurrentPage("login");
  };

  const handleBack = () => {
    if (currentPage === "otpVerification") {
      setCurrentPage("forgotPassword");
    } else if (currentPage === "resetPassword") {
      setCurrentPage("otpVerification");
    } else if (currentPage === "forgotPassword") {
      setCurrentPage("login");
    }
  };

  const handleResetOTP = () => {
    console.log("Reset OTP requested");
    // Add your reset OTP logic here
  };

  return (
    <div className="min-h-screen w-full bg-white relative">
      <div className="absolute top-4 left-4 md:top-8 md:left-8">
        <div className="flex flex-col gap-2">
          <img 
            src={instaVisitLogo} 
            alt="InstaVisitRx+" 
            className="h-auto w-auto"
          />
        </div>
      </div>

      <div className="flex min-h-screen w-full items-center justify-center bg-white p-4">
        {/* Modal Card */}
        <div className="w-full max-w-[550px] p-8 bg-white rounded-lg">
        {currentPage === "login" && (
          <LoginPage
            form={loginForm}
            onSubmit={onLoginSubmit}
            onForgotPasswordClick={() => setCurrentPage("forgotPassword")}
          />
        )}
        {currentPage === "forgotPassword" && (
          <ForgotPasswordPage
            form={forgotPasswordForm}
            onSubmit={onForgotPasswordSubmit}
            onBack={handleBack}
          />
        )}
        {currentPage === "otpVerification" && (
          <OTPVerificationPage
            form={otpForm}
            onSubmit={onOTPSubmit}
            onBack={handleBack}
            onResetOTP={handleResetOTP}
            userEmail={userEmail}
          />
        )}
        {currentPage === "resetPassword" && (
          <ResetPasswordPage
            form={resetPasswordForm}
            onSubmit={onResetPasswordSubmit}
            onBack={handleBack}
          />
        )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
