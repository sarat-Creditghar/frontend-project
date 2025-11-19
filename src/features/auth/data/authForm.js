//src/features/auth/data/authForm.js

export const signInFields = [
  {
    name: "email",
    type: "email",
    label: "Email Id",
    placeholder: "Enter Your Email Id",
    validation: {
      required: true,
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      errorMessage: "Invalid email format",
    },
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter Your Password",
    validation: {
      required: true,
      regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/,
      errorMessage: "Password must be at least 8 character",
    },
  },
];

export const signupFields = [

  {
    row: 1,
    columns: 2,
    fields: [
      {
        name: "firstName",
        type: "text",
        label: "First Name",
        placeholder: "Enter first name",
        validation: { required: true },
      },
      {
        name: "lastName",
        type: "text",
        label: "Last Name",
        placeholder: "Enter last name",
        validation: { required: true },
      },
    ],
  },
  

  {
    row: 2,
    columns: 2,
    fields: [
      {
        name: "email",
        type: "email",
        label: "Email",
        placeholder: "Enter email",
        validation: { required: true },
      },
      {
        name: "phone",
        type: "tel",
        label: "Phone Number",
        placeholder: "Enter phone number",
        validation: { required: true },
      },
    ],
  },
  {
    row: 3,
    columns: 1,
    fields: [
      {
        name: "address",
        type: "textarea",
        label: "Address",
        placeholder: "Enter address",
        validation: { required: true },
        rows: 3,
      },
    ],
  },

  {
    row: 4,
    columns: 3,
    fields: [
      {
        name: "pincode",
        type: "number",
        label: "Pincode",
        placeholder: "Enter pincode",
        validation: { required: true },
      },
      {
        name: "state",
        type: "text",
        label: "State",
        placeholder: "Enter state",
        validation: { required: true },
      },
      {
        name: "country",
        type: "select",
        label: "Country",
        placeholder: "Select country",
        options: [
          { value: "india", label: "India" },
          { value: "usa", label: "USA" },
        ],
        validation: { required: true },
      }
      
    ],
  },
];
