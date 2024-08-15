
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-8 text-blue-600 underline">
        Go back to the homepage
      </Link>
    </div>
  );
}
