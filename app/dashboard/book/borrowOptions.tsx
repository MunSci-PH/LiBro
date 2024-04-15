"use client";

import { createClient } from "@/app/config/client";
import isDarkTheme from "@/app/config/theme";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IContainerProps {
  acc_num: number;
}

export const BorrowOptions: React.FC<IContainerProps> = (props) => {
  const { getValues, handleSubmit, register } = useForm({
    defaultValues: { duration: 3, purpose: "Entertainment" },
  });
  const supabase = createClient();
  const [duration, setDuration] = useState(3);
  const [purpose, setPurpose] = useState("Entertainment");
  const [loading, isLoading] = useState(false);
  const router = useRouter();

  function addDaysWithWeekendHandling() {
    const today: number = Date.now();
    let calculatedDate = new Date(today);
    calculatedDate.setDate(calculatedDate.getDate() + duration);

    // Check if the calculated date falls on a weekend
    let dayOfWeek = calculatedDate.getDay();
    if (dayOfWeek === 6 || dayOfWeek === 0) {
      // Weekend
      // Calculate days to add to reach the next Monday
      const daysUntilMonday = dayOfWeek === 0 ? 1 : 2;
      calculatedDate.setDate(calculatedDate.getDate() + daysUntilMonday);
    }

    return calculatedDate;
  }

  function newDuration() {
    setDuration(getValues("duration"));
  }

  function newPurpose() {
    setPurpose(getValues("purpose"));
  }

  const submitData = async () => {
    isLoading(true);
    const user = (await supabase.auth.getUser()).data.user?.id;

    let submitQuery = supabase.from("orders").insert({
      duration: duration,
      purpose: `${purpose}`,
      user_id: user!,
      book_num: props.acc_num,
    });

    const { error } = await submitQuery;

    if (error) {
      isLoading(false);
      toast.error(error.message, {
        position: "top-right",
        theme: isDarkTheme() ? "dark" : "light",
      });
    }
    if (!error) {
      router.push(
        "/dashboard/book/success?message=A new borrow request has been made."
      );
    }
  };

  return (
    <form className="w-full mt-4" onSubmit={handleSubmit(submitData)}>
      <div className="w-11/12 mx-auto flex flex-col">
        <div className="flex-grow mb-2">
          <p className="text-left text-xl font-sans font-bold w-fit my-auto">
            Borrow Duration (Days)
          </p>
          <p className="text-left text-sm font-sans font-bold w-fit my-auto flex-grow">
            Return the book by{" "}
            {addDaysWithWeekendHandling().toLocaleDateString()}
          </p>
        </div>
        <div className="flex-grow my-2">
          <input
            type="range"
            defaultValue="3"
            className="range"
            step="1"
            min={3}
            max={7}
            {...register("duration", {
              min: 3,
              max: 7,
              onChange: () => {
                newDuration();
              },
            })}
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
          </div>
        </div>
        <div className="flex-grow mb-2">
          <p className="text-left text-xl font-sans font-bold w-fit my-auto">
            Purpose of Reading
          </p>
        </div>
        <div className="flex-grow my-2">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Entertaiment</span>
              <input
                {...register("purpose", {
                  required: true,
                  onChange: () => {
                    newPurpose();
                  },
                })}
                type="radio"
                name="purpose"
                value="Entertainment"
                className="radio radio-primary"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Research</span>
              <input
                {...register("purpose", {
                  required: true,
                  onChange: () => {
                    newPurpose();
                  },
                })}
                type="radio"
                name="purpose"
                value="Research"
                className="radio radio-primary"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Other</span>
              <input
                {...register("purpose", {
                  required: true,
                  onChange: () => {
                    newPurpose();
                  },
                })}
                type="radio"
                name="purpose"
                value="Other"
                className="radio radio-primary"
              />
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-accent text-white"
          disabled={loading}
        >
          Borrow
        </button>
      </div>
    </form>
  );
};
