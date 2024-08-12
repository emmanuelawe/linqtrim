// import React, {lazy} from "react";
import LoginForm from "@/components/LoginForm";
import { Suspense } from "react";
import Loading from './loading'

// const LoginForm = lazy(() => import("@/components/LoginForm"))

export default  function LoginPage() {

  return (
    <main className="flex items-center justify-center mx-0 md:mx-auto md:container min-h-screen ">
      <Suspense fallback={<Loading />}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
