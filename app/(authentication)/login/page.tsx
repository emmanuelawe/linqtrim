import LoginForm from "@/components/LoginForm";

export default async function LoginPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main className="flex items-center justify-center mx-0 md:mx-auto md:container min-h-screen ">
      <LoginForm />
    </main>
  );
}
