"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/lib/validationSchemas";
import Link from "next/link";
import React, { useState } from "react";
import { signInWithGoogle, signup } from "@/app/(authentication)/login/actions";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ButtonLoader from "./LoginLoader";
import Image from "next/image";
import GoogleLoader from "./GoogleLoader";

const SignupForm = () => {
  // Extract the message from the query parameters
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogle = async () => {
    setIsGoogleLoading(true);
    await signInWithGoogle();
    // Simulate a delay (e.g., for navigation or API call)
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    await signup(formData);
  };

  return (
    <main
      aria-label="Signup Form"
      className="flex flex-col items-center justify-center p-6 md:p-10 bg-white dark:bg-gray-900 w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Sign Up
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Create an account in seconds
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-6 space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2EB77A] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          {errors.email?.message && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.email.message.toString()}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            required
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2EB77A] dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          {errors.password?.message && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.password.message.toString()}
            </p>
          )}
        </div>
        {message && <div className="mt-4 text-red-500 text-sm">{message}</div>}
        {isLoading ? (
          <ButtonLoader />
        ) : (
          <Button
            size="lg"
            type="submit"
            className="w-full mt-4 py-2 text-white bg-[#2EB77A] hover:bg-[#038C5A] rounded-md"
          >
            Create Account
          </Button>
        )}
        {isGoogleLoading ? (
          <GoogleLoader />
        ) : (
          <Button
            onClick={handleGoogle}
            variant="outline"
            size="lg"
            type="button"
            className="w-full mt-4 py-2 border border-gray-300 text-gray-700 dark:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            <div className="flex items-center">
              <Image
                src="/google.png"
                alt="Google Logo"
                width={18}
                height={18}
                className="mr-2"
              />
              Sign up with Google
            </div>
          </Button>
        )}
      </form>
      <div className="flex mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <Link href="/login">
          <p className="ml-1 font-semibold text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-500">
            Log In
          </p>
        </Link>
      </div>
    </main>
  );
};

export default SignupForm;
