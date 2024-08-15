"use client";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <main
      aria-label="Something went wrong"
      className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA] dark:bg-[#111212] text-center"
    >
      <h1 className="text-6xl font-bold text-[#2EB77A]">
        Something went wrong
      </h1>
      <p className="mt-4 text-xl text-gray-700 dark:text-white">
        We’re sorry, but an unexpected error occurred.
      </p>
      <Link href="/" className="mt-8 text-[#2EB77A] underline">
        Go back to the homepage
      </Link>
    </main>
  );
}
