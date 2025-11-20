import { FormProvider, useForm } from "react-hook-form";
import { signInFields } from "../data/authForm";

import InputField from "../../../shared/components/InputField";

import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../validation/authValidation";

import { useNavigate } from "react-router";



const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log(BASE_URL)
const SignInForm = () => {
  const methods = useForm({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, formState } = methods;
  const { isDirty, isValid } = formState;

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await fetch(
      `${BASE_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (response.ok && result.token) {
      localStorage.setItem("auth_token", result.token);

      navigate("/dashboard");
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {signInFields.map((field) => (
            <InputField key={field.name} config={field} />
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full h-11 bg-primary  text-primary-content rounded-xl font-medium ${
              isDirty && isValid
                ? "bg-primary text-primary-content"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isDirty || !isValid}
          >
            Log In
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default SignInForm;

//sign in form
