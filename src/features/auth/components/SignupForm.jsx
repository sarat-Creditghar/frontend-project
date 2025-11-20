import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupFields } from "../data/authForm";
import { signupSchema } from "../validation/authValidation";
import InputField from "../../../shared/components/InputField";
import { registerUser } from "../api/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const SignupForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const methods = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      age: "",
      address: "",
      pincode: "",
      country: "",
      state: "",
      password: "",
    },
  });

  const { handleSubmit, formState } = methods;
  const { isDirty, isValid } = formState;

  const onSubmit = async (data) => {
    const apiPayload = {
      username: data.username,
      email: data.email,
      password: data.password,
      name: `${data.firstName} ${data.lastName}`,
      age: Number(data.age),
      address: `${data.address}, ${data.pincode}, ${data.state}, ${data.country}`,
    };

    try {
      const result = await registerUser(apiPayload);
      if (result.token) {
        login(result);
        toast.success("Registration successful!");
        navigate("/");
      } else {
        toast.success("Registration successful! Please sign in.");
        navigate("/signin");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.message || "Registration failed");
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
          {/* Dynamically render rows based on JSON structure */}
          {signupFields.map((rowConfig, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid gap-4 ${rowConfig.columns === 1
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
            className={`w-full h-11 rounded-xl font-medium mt-4 transition-all ${isDirty && isValid
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