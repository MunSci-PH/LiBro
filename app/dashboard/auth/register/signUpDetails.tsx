import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { signUpData } from "./page";
import { FaUser } from "react-icons/fa";
import { ErrorMessage } from "@hookform/error-message";
import { FaBriefcase, FaHashtag, FaHouse, FaUsers } from "react-icons/fa6";
import { useState } from "react";
import { createClient } from "@/app/config/client";
import { QueryData } from "@supabase/supabase-js";

interface IContainerProps {
  register: UseFormRegister<signUpData>;
  watch: UseFormWatch<signUpData>;
  errors: FieldErrors<signUpData>;
  nextPage: Function;
  isLoading: boolean;
}

export const SignUpDetails: React.FC<IContainerProps> = (
  props: IContainerProps
) => {
  const supabase = createClient();

  const sectionListQuery = supabase.from("sections").select("sectionName");
  type sections = QueryData<typeof sectionListQuery>;

  const handleChange = async (e: { target: { value: number } }) => {
    const { data, error } = await sectionListQuery.eq("grade", e.target.value);
    if (error) console.error(error);
    const finalSectionList: sections = data!;

    const list = finalSectionList!
      ?.map((e) => e.sectionName!)
      .sort((a, b) => a?.localeCompare(b));
    console.log(e.target.value, list);
    setSectionList(list);
  };

  const [sectionList, setSectionList] = useState<string[]>();

  return (
    <>
      <label className="form-control w-full">
        <label className="input input-bordered flex items-center gap-2">
          <FaHashtag
            className=" w-4 h-4 opacity-70"
            width={"1rem"}
            height={"1rem"}
          />
          <input
            type="text"
            className="grow"
            placeholder="LRN"
            required
            {...props.register("lrn", {
              required: { value: true, message: "This field is required." },
              minLength: { value: 12, message: "Must be 12 characters only." },
              maxLength: { value: 12, message: "Must be 12 characters only." },
              pattern: { value: /[0-9]{12}/, message: "Must only be numbers" },
            })}
          />
        </label>
        <div className={props.errors.lrn ? "label" : "label hidden"}>
          <ErrorMessage
            errors={props.errors}
            name="lrn"
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <label className="form-control w-full max-w-xs">
          <label className="input input-bordered flex items-center gap-2">
            <FaUser
              className=" w-4 h-4 opacity-70"
              width={"1rem"}
              height={"1rem"}
            />
            <input
              type="text"
              className="grow"
              placeholder="First Name"
              required
              {...props.register("firstName", {
                required: { value: true, message: "This field is required." },
                maxLength: {
                  value: 30,
                  message: "Must not exceed 30 characters.",
                },
              })}
            />
          </label>
          <div className={props.errors.firstName ? "label" : "label hidden"}>
            <ErrorMessage
              errors={props.errors}
              name="firstName"
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
        <label className="form-control w-full max-w-xs">
          <label className="input input-bordered flex items-center gap-2">
            <FaUser
              className=" w-4 h-4 opacity-70"
              width={"1rem"}
              height={"1rem"}
            />
            <input
              type="text"
              className="grow"
              placeholder="Middle Name"
              required
              {...props.register("middleName", {
                maxLength: {
                  value: 30,
                  message: "Must not exceed 30 characters.",
                },
              })}
            />
          </label>
          <div className={props.errors.middleName ? "label" : "label hidden"}>
            <ErrorMessage
              errors={props.errors}
              name="middleName"
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
        <label className="form-control w-full max-w-xs">
          <label className="input input-bordered flex items-center gap-2">
            <FaUser
              className=" w-4 h-4 opacity-70"
              width={"1rem"}
              height={"1rem"}
            />
            <input
              type="text"
              className="grow"
              placeholder="Last Name"
              required
              {...props.register("lastName", {
                required: { value: true, message: "This field is required." },
                maxLength: {
                  value: 30,
                  message: "Must not exceed 30 characters.",
                },
              })}
            />
          </label>
          <div className={props.errors.lastName ? "label" : "label hidden"}>
            <ErrorMessage
              errors={props.errors}
              name="lastName"
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
      </div>
      <label className="form-control w-full">
        <label className="input input-bordered flex items-center gap-2">
          <FaHashtag
            className=" w-4 h-4 opacity-70"
            width={"1rem"}
            height={"1rem"}
          />
          <input
            type="text"
            className="grow"
            placeholder="Phone Number"
            required
            {...props.register("number", {
              required: { value: true, message: "This field is required." },
              pattern: {
                value: /((^(\+)(\d){12}$)|(^\d{11}$))/,
                message:
                  "Only accepts the following format: 09151231234 or +6391551231234",
              },
            })}
          />
        </label>
        <div className={props.errors.number ? "label" : "label hidden"}>
          <ErrorMessage
            errors={props.errors}
            name="number"
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
      <label className="form-control w-full ">
        <label className="input input-bordered flex items-center gap-2">
          <FaHouse
            className=" w-4 h-4 opacity-70"
            width={"1rem"}
            height={"1rem"}
          />
          <input
            type="text"
            className="grow"
            placeholder="Address"
            required
            {...props.register("address", {
              required: { value: true, message: "This field is required." },
            })}
          />
        </label>
        <div className={props.errors.address ? "label" : "label hidden"}>
          <ErrorMessage
            errors={props.errors}
            name="address"
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
      <label className="form-control w-full ">
        <label className="select select-bordered relative flex items-center gap-2 outline-2 outline-offset-2 outline-base-content/20 focus-within:outline">
          <FaBriefcase
            className=" w-4 h-4 opacity-70"
            width={"1rem"}
            height={"1rem"}
          ></FaBriefcase>
          <select
            defaultValue="none"
            className="absolute inset-0 grow cursor-pointer appearance-none bg-transparent px-10 focus:outline-none"
            {...props.register("occupation", {
              required: { value: true, message: "This field is required." },
            })}
          >
            <option value="none" disabled>
              Occupation
            </option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="other">Other</option>
          </select>
        </label>
        <div className={props.errors.occupation ? "label" : "label hidden"}>
          <ErrorMessage
            errors={props.errors}
            name="occupation"
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
      {props.watch("occupation") == "student" ? (
        <label className="form-control w-full ">
          <label className="select select-bordered relative flex items-center gap-2 outline-2 outline-offset-2 outline-base-content/20 focus-within:outline">
            <FaHashtag
              className=" w-4 h-4 opacity-70"
              width={"1rem"}
              height={"1rem"}
            ></FaHashtag>
            <select
              defaultValue="none"
              className="absolute inset-0 grow cursor-pointer appearance-none bg-transparent px-10 focus:outline-none"
              {...props.register("grade", {
                required: { value: true, message: "This field is required." },
                onChange: (e) => {
                  handleChange(e);
                },
              })}
            >
              <option value="none" disabled>
                Grade
              </option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>
          <div className={props.errors.grade ? "label" : "label hidden"}>
            <ErrorMessage
              errors={props.errors}
              name="grade"
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
      ) : (
        <></>
      )}
      {props.watch("grade")! >= 7 && sectionList ? (
        <label className="form-control w-full ">
          <label className="select select-bordered relative flex items-center gap-2 outline-2 outline-offset-2 outline-base-content/20 focus-within:outline">
            <FaUsers
              className=" w-4 h-4 opacity-70"
              width={"1rem"}
              height={"1rem"}
            ></FaUsers>
            <select
              defaultValue="none"
              className="absolute inset-0 grow cursor-pointer appearance-none bg-transparent px-10 focus:outline-none"
              {...props.register("section", {
                required: { value: true, message: "This field is required." },
              })}
            >
              <option value="none" disabled>
                Section
              </option>
              {sectionList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <div className={props.errors.grade ? "label" : "label hidden"}>
            <ErrorMessage
              errors={props.errors}
              name="grade"
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
      ) : (
        <></>
      )}
      <div className="form-control max-w-xs">
        <label className="cursor-pointer label gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-accent"
            required
          />
          <span className="label-text">
            I agree to the terms and conditions.
          </span>
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          props.nextPage();
        }}
        className="btn btn-accent text-white"
        disabled={props.isLoading}
      >
        Sign Up
      </button>
    </>
  );
};
