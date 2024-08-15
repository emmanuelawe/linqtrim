import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main
      aria-label="Not found"
      className="flex flex-col items-center justify-center min-h-screen bg-[#FAFAFA] dark:bg-[#111212] text-center"
    >
      <h1 className="text-6xl font-bold text-[#2EB77A]">404</h1>
      <p className="mt-4 text-xl text-gray-700 dark:text-white">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-8 text-[#2EB77A] underline">
        Go back to the homepage
      </Link>
    </main>
  );
}
