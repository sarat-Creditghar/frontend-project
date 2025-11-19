import { FormProvider, useForm } from "react-hook-form";
import { signInFields } from "../data/authForm";

import InputField from "../../../shared/components/InputField";

import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../validation/authValidation";

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

  const onSubmit = async (data) => {
    const response = await fetch(
      "https://3feb5512b1d2.ngrok-free.app/api/whatever",
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
    console.log("API Response:", result);
    methods.reset();
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
