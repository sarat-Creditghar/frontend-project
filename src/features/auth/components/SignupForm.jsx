import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupFields, } from "../data/authForm";
import {signupSchema} from "../validation/authValidation"
import InputField from "../../../shared/components/InputField";

const SignupForm = () => {
  const methods = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      pincode: "",
      country: "",
      state: "",
    },
  });

  const { handleSubmit, formState } = methods;
  const { isDirty, isValid } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    methods.reset();
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Dynamically render rows based on JSON structure */}
          {signupFields.map((rowConfig, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid gap-4 ${
                rowConfig.columns === 1
                  ? "grid-cols-1"
                  : rowConfig.columns === 2
                  ? "grid-cols-2"
                  : rowConfig.columns === 3
                  ? "grid-cols-3"
                  : `grid-cols-${rowConfig.columns}`
              }`}
            >
              {rowConfig.fields.map((field) => (
                <InputField key={field.name} config={field} />
              ))}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full h-11 rounded-xl font-medium mt-4 transition-all ${
              isDirty && isValid
                ? "bg-primary text-primary-content hover:opacity-90"
                : "bg-gray-400 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isDirty || !isValid}
          >
            Sign Up
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default SignupForm;