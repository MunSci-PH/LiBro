"use client";

import { LoginAnnouncements } from "@/app/dashboard/auth/login/announcements";
import { createClient } from "@/app/config/client";
import isDarkTheme from "@/app/config/theme";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ErrorMessage } from "@hookform/error-message";

export type loginData = {
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginData>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const tryLogin = async (e: loginData) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: e.email,
      password: e.password,
    });

    if (error) {
      setLoading(false);
      toast.error(error.message, {
        position: "top-right",
        theme: isDarkTheme() ? "dark" : "light",
      });
    }
    if (data) {
      router.push("/dashboard/");
    }
  };

  return (
    <>
      <main className="max-w-md lg:max-w-screen-xl lg:w-full mx-auto p-6 lg:flex justify-between items-center">
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
                  href="/dashboard/auth/register"
                >
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit(tryLogin)} className="form-control">
                <div className="grid gap-y-4">
                  <label className="form-control w-full max-w-xs">
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
                        {...register("email", {
                          required: true,
                          pattern: {
                            value:
                              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Please input a valid email.",
                          },
                        })}
                      />
                    </label>
                    <div className={errors.email ? "label" : "label hidden"}>
                      <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({ message }) => {
                          return (
                            <span className="label-text-alt text-error text-left font-bold">
                              {message}
                            </span>
                          );
                        }}
                      />
                    </div>
                  </label>
                  <label className="form-control w-full max-w-xs ">
                    <div className="label">
                      <span></span>
                      <span className="label-text-alt">
                        <Link
                          href="/dashboard/auth/reset"
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
                        {...register("password", {
                          required: true,
                        })}
                      />
                    </label>
                    <div className={errors.email ? "label" : "label hidden"}>
                      <ErrorMessage
                        errors={errors}
                        name="password"
                        render={({ message }) => {
                          return (
                            <span className="label-text-alt text-error text-left font-bold">
                              {message}
                            </span>
                          );
                        }}
                      />
                    </div>
                  </label>
                  <button
                    type="submit"
                    className="btn btn-accent text-white"
                    disabled={loading}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
