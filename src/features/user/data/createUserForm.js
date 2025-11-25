export const createUserFields = [
    {
        row: 1,
        columns: 2,
        fields: [
            {
                name: "fullName",
                type: "text",
                label: "Full name",
                placeholder: "Enter full name",
                validation: { required: "Full name is required" },
            },
            {
                name: "email",
                type: "email",
                label: "Email address",
                placeholder: "Enter email address",
                validation: {
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format"
                    }
                },
            },
        ],
    },
    {
        row: 2,
        columns: 2,
        fields: [
            {
                name: "phoneNumber",
                type: "text",
                label: "Phone number",
                placeholder: "Enter phone number",
                validation: { required: "Phone number is required" },
            },
            {
                name: "country",
                type: "select",
                label: "Country",
                placeholder: "Select country",
                options: [
                    { value: "usa", label: "United States" },
                    { value: "uk", label: "United Kingdom" },
                    { value: "india", label: "India" },
                    { value: "canada", label: "Canada" },
                ],
                validation: { required: "Country is required" },
            },
        ],
    },
    {
        row: 3,
        columns: 2,
        fields: [
            {
                name: "state",
                type: "text",
                label: "State/region",
                placeholder: "Enter state/region",
                validation: { required: "State is required" },
            },
            {
                name: "city",
                type: "text",
                label: "City",
                placeholder: "Enter city",
                validation: { required: "City is required" },
            },
        ],
    },
    {
        row: 4,
        columns: 2,
        fields: [
            {
                name: "address",
                type: "text",
                label: "Address",
                placeholder: "Enter address",
                validation: { required: "Address is required" },
            },
            {
                name: "zipCode",
                type: "text",
                label: "Zip/code",
                placeholder: "Enter zip code",
                validation: { required: "Zip code is required" },
            },
        ],
    },
    {
        row: 5,
        columns: 2,
        fields: [
            {
                name: "company",
                type: "text",
                label: "Company",
                placeholder: "Enter company",
                validation: { required: "Company is required" },
            },
            {
                name: "role",
                type: "text",
                label: "Role",
                placeholder: "Enter role",
                validation: { required: "Role is required" },
            },
        ],
    },
];
