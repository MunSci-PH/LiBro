import Nav from "@/app/components/Nav";
import LoginAnnouncements from "@/app/components/announcements/login";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-green-300/50 to-lime-100 blur-3xl w-[25rem] h-[45rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-green-900/50 dark:to-lime-900"></div>
          <div className="bg-gradient-to-tl from-green-50 via-green-100 to-green-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-emerald-900/70 dark:via-emerald-900/70 dark:to-emerald-900/70"></div>
        </div>
        <div className="relative z-10 w-screen ">
          <main className="max-w-md lg:max-w-screen-xl mx-auto p-6 lg:flex justify-between items-center mt-48">
            <LoginAnnouncements></LoginAnnouncements>
            <div className="bg-gradient-to-br dark:from-green-800 dark:to-green-950 from-green-100 to-green-200 border border-green-200 rounded-xl shadow-sm dark:border-emerald-800">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Sign in
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Don&apos;t have an account yet? {""}
                    <Link
                      className="text-info decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="/auth/register"
                    >
                      Sign up here
                    </Link>
                  </p>
                </div>

                <div className="mt-5">
                  <form>
                    <div className="grid gap-y-4">
                      <label className="input input-bordered flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4 opacity-70"
                        >
                          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                          type="text"
                          className="grow"
                          placeholder="Email"
                        />
                      </label>
                      <label className="form-control w-full max-w-xs">
                        <div className="label">
                          <span></span>
                          <span className="label-text-alt">
                            <Link
                              href="/auth/reset"
                              className="text-info decoration-2 hover:underline"
                            >
                              Forgot Password?
                            </Link>
                          </span>
                        </div>
                        <label className="input input-bordered flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <input
                            type="password"
                            className="grow"
                            placeholder="Password"
                          />
                        </label>
                      </label>
                      <div className="form-control">
                        <label className="cursor-pointer label">
                          <span className="label-text">Remember me</span>
                          <input
                            type="checkbox"
                            defaultChecked
                            className="checkbox checkbox-accent"
                          />
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-accent text-white"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
