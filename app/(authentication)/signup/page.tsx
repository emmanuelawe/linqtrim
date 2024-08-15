import SignupForm from "@/components/SignupForm";

export default async function SignUpPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <main className="flex items-center justify-center mx-0 md:mx-auto md:container min-h-screen">
      <SignupForm />
    </main>
  );
}
