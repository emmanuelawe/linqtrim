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
import ButtonLoader from "./ButtonLoader";

const SignupForm = () => {
  // Extract the message from the query parameters
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const [isLoading, setIsLoading] = useState(false)

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    await signup(formData);
  };

  return (
    <div className="flex md:p-10 p-6 bg-white w-full max-w-3xl h-[32rem] items-center rounded-xl drop-shadow-xl">
      <div className="w-full   ">
        <h2 className="md:text-2xl font-bold mt-2">Sign Up</h2>
        <p className="mt-2 md:text-sm text-gray-400">
          Create an account in seconds
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col ">
          <div className="">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              required
              className="flex mt-2 pl-4 py-3 pr-32 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-10 h-8 w-full rounded-md border-2 border-gray-100 bg-gray-50/50"
            />
            {errors.email?.message && (
              <p className="text-red-500">{errors.email.message.toString()}</p>
            )}
          </div>
          <div className="mt-6">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              required
              className="flex mt-2 pl-4 py-4 pr-32 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-10 h-8 w-full rounded-md border-2 border-gray-100 bg-gray-50/50"
            />
            {errors.password?.message && (
              <p className="text-red-500">{errors.password.message.toString()}</p>
            )}
          </div>
          {message && (
            <div className="mt-4 text-red-500 text-sm">{message}</div>
          )}
           { isLoading ? 
            <ButtonLoader  />
            :
          <Button size="lg" type="submit" className="button mt-10 md:text-lg">
            Create account
          </Button>
}
          <Button onClick={() => signInWithGoogle()} variant="outline" size="lg" type="button" className="mt-4 md:text-base">
            Sign in with Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{""}
          <Link href="/login">
            <button
              className="font-semibold ml-1 text-[#2EB77A] hover:text-[#038C5A]"
            >
              Log in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
