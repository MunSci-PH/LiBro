"use client";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import isDarkTheme from "@/app/config/theme";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SignUpForm } from "./signUpForm";
import { SignUpDetails } from "./signUpDetails";
import { Nullable, TablesInsert } from "@/global";
import { createClient } from "@/app/config/client";
import { middleware } from "@/middleware";

export type signUpData = {
  email: string;
  password: string;
  confirm: string;
  lrn: string;
  firstName: string;
  middleName: string;
  lastName: string;
  number: string;
  address: string;
  occupation: string;
  grade: Nullable<number>;
  section: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<signUpData>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const supabase = createClient();
  const router = useRouter();

  const trySignUp = async (e: signUpData) => {
    setLoading(true);

    if (e.occupation == "none") {
      toast.error("Occupation must not be empty.", {
        position: "top-right",
        theme: isDarkTheme() ? "dark" : "light",
      });
      setLoading(false);
    } else if (
      e.occupation == "student" &&
      e.grade?.toString() == "none" &&
      e.section == "none"
    ) {
      toast.error("Grade and/or section fields must not be empty.", {
        position: "top-right",
        theme: isDarkTheme() ? "dark" : "light",
      });
      setLoading(false);
    }

    if (e.occupation != "student") {
      e.grade = null;
      e.section = "";
    }

    const { data, error } = await supabase.auth.signUp({
      email: e.email,
      password: e.password,
      options: { emailRedirectTo: `${window.location.origin}/dashboard` },
    });

    if (error) {
      toast.error(error.message, {
        position: "top-right",
        theme: isDarkTheme() ? "dark" : "light",
      });
      setLoading(false);
    }
    if (data) {
      const id = data.user!.id;
      await uploadData(e, id);
    }
  };

  const uploadData = async (e: signUpData, id: string) => {
    const inputs: TablesInsert<"users"> = {
      id: id,
      first_name: e.firstName.trim(),
      middle_name: e.middleName?.trim(),
      last_name: e.lastName.trim(),
      lrn: e.lrn.trim(),
      address: e.address.trim(),
      number: e.number.trim(),
      occupation: e.occupation,
      grade: e.grade,
      section: e.section.trim(),
    };

    const submitQuery = supabase.from("users").insert(inputs);

    const { error } = await submitQuery;

    if (error) {
      toast.error(error.message, {
        position: "top-right",
        theme: isDarkTheme() ? "dark" : "light",
      });
      setLoading(false);
    }
    if (!error) {
      router.push(
        "/dashboard/auth/success?message=You have successfully signed up. Check your email."
      );
    }
  };

  const nextPage = async () => {
    console.log(page);
    if (page == 1) {
      const result = await trigger();

      console.log(result);
      console.log(errors);

      if (result) {
        setPage(2);
      }
    } else {
      const result = await trigger();

      console.log(result);
      console.log(errors);

      if (result) handleSubmit(trySignUp)();
    }
  };

  return (
    <>
      <main className="max-w-md min-w-fit lg:max-w-lg mx-auto p-6">
        <div className="bg-gradient-to-br dark:from-green-800 dark:to-green-950 from-green-100 to-green-200 border border-green-200 rounded-xl shadow-sm dark:border-emerald-800">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Register
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account? {""}
                <Link
                  className="text-info decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/dashboard/auth/login"
                >
                  Log in here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form
                onSubmit={(e) => {
                  handleSubmit(trySignUp);
                }}
                onKeyDown={(event) => {
                  if (event.key == "Enter") {
                    event.preventDefault();
                    nextPage();
                  }
                }}
                className="form-control"
              >
                <div className="grid gap-y-4">
                  {page == 1 ? (
                    <SignUpForm
                      register={register}
                      watch={watch}
                      errors={errors}
                      nextPage={nextPage}
                    ></SignUpForm>
                  ) : (
                    <SignUpDetails
                      register={register}
                      watch={watch}
                      errors={errors}
                      nextPage={nextPage}
                      isLoading={loading}
                    ></SignUpDetails>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
