import { FormProvider, useForm } from "react-hook-form";
import { signInFields } from "../data/authForm";

import InputField from "../../../shared/components/ui/InputField";

import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../validation/authValidation";

import { useNavigate } from "react-router";



import { loginUser } from "../api/authApi";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

const SignInForm = () => {
  const { login } = useAuth();
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
    try {
      const result = await loginUser(data);
      if (result.token) {
        login(result);
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message || "Unauthorized: Invalid credentials");
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
            className={`w-full h-11 bg-primary  text-primary-content rounded-xl font-medium ${isDirty && isValid
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
