'use client'
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">Something went wrong</h1>
      <p className="mt-4 text-xl text-gray-700">
        We’re sorry, but an unexpected error occurred.
      </p>
      <Link href="/" className="mt-8 text-blue-600 underline">
        Go back to the homepage
      </Link>
    </div>
  );
}
