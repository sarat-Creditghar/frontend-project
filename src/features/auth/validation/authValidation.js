import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
      "Password: 8+ chars"
    ),

});




export const signupSchema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .min(2, "at least 2 characters"),
  lastName: yup
    .string()
    .required()
    .min(2, "at least 2 characters"),
  username: yup
    .string()
    .required()
    .min(3, "At least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  age: yup
    .number()
    .transform((value, originalValue) => (originalValue === "" ? undefined : value)) // Convert empty string to undefined
    .required("Age is required")
    .positive("Age must be positive")
    .integer("Age must be an integer"),
  address: yup
    .string()
    .required("Address is required")
    .min(5, "Address must be at least 5 characters"),
  pincode: yup
    .string()
    .required("Pincode is required")
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
      "Password: 8+ chars"
    ),
});
