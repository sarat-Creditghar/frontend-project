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
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
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
      "Password: 8+ chars, 1 uppercase, 1 number, 1 special char"
    ),
});











