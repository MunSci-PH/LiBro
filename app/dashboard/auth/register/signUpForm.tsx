import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { signUpData } from "./page";
import { ErrorMessage } from "@hookform/error-message";
import { FaEnvelope, FaKey } from "react-icons/fa6";

interface IContainerProps {
  register: UseFormRegister<signUpData>;
  watch: UseFormWatch<signUpData>;
  errors: FieldErrors<signUpData>;
  nextPage: Function;
}

export const SignUpForm: React.FC<IContainerProps> = (
  props: IContainerProps
) => {
  return (
    <>
      <label className="form-control w-full max-w-xs">
        <label className="input input-bordered flex items-center gap-2">
          <FaEnvelope
            className=" w-4 h-4 opacity-70"
            width={"1rem"}
            height={"1rem"}
          />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            required
            {...props.register("email", {
              required: { value: true, message: "This field is required." },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please input a valid email.",
              },
            })}
          />
        </label>
        <div className={props.errors.email ? "label" : "label hidden"}>
          <ErrorMessage
            errors={props.errors}
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
      <label className="form-control w-full max-w-xs">
        <label className="input input-bordered flex items-center gap-2">
          <FaKey
            className=" w-4 h-4 opacity-70"
            width={"1rem"}
            height={"1rem"}
          />
          <input
            type="password"
            className="grow"
            placeholder="Password"
            required
            {...props.register("password", {
              required: { value: true, message: "This field is required." },
              minLength: 8,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Must be atleast eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
              },
            })}
          />
        </label>
        <div className={props.errors.password ? "label" : "label hidden"}>
          <ErrorMessage
            errors={props.errors}
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
      <label className="form-control w-full max-w-xs">
        <label className="input input-bordered flex items-center gap-2">
          <FaKey
            className="w-4 h-4 opacity-70"
            width={"1rem"}
            height={"1rem"}
          />
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            required
            {...props.register("confirm", {
              required: { value: true, message: "This field is required." },
              validate: (e) =>
                e === props.watch("password") || "Passwords don't match",
            })}
          />
        </label>
        <div className={props.errors.confirm ? "label" : "label hidden"}>
          <ErrorMessage
            errors={props.errors}
            name="confirm"
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
        type="button"
        className="btn btn-accent text-white"
        onClick={async () => {
          props.nextPage();
        }}
      >
        Next Page
      </button>
    </>
  );
};
