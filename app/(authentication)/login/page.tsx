import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center mx-auto container min-h-screen ">
      <div className="flex md:p-10 p-6 bg-white w-full max-w-xl h-[32rem] items-center rounded-xl drop-shadow-xl">
        <div className="w-full   ">
          <h2 className="md:text-2xl font-bold mt-2">Log In</h2>
          <p className="mt-2 md:text-sm text-gray-400">
            Enter your email and password
          </p>
          <form className="mt-6 flex flex-col ">
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="flex mt-2 pl-4 py-3 pr-32 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-10 h-8 min-w-[100%] rounded-md border-2 border-gray-100 bg-gray-50/80"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="flex mt-2 pl-4 py-4 pr-32 md:placeholder:text-base placeholder:text-sm focus:outline-none md:h-10 h-8 min-w-[100%] rounded-md border-2 border-gray-100 bg-gray-50/80"
              />
            </div>
            <button formAction={login} className="button mt-10 md:text-lg">
              Log in
            </button>
            <button
              formAction={signup}
              className="button_stroke mb-2 mt-6 md:text-lg"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
