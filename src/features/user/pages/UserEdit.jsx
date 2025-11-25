import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Camera, X } from "lucide-react";
import InputField from "../../../shared/components/ui/InputField";
import editUserData from "../data/editUserData.json";

const EditUser = () => {
    const { user } = editUserData;

    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            fullName: user.fullName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            country: user.country,
            state: user.state,
            city: user.city,
            address: user.address,
            zipCode: user.zipCode,
            company: user.company,
            role: user.role,
        },
    });

    const [isBanned, setIsBanned] = useState(user.isBanned);
    const [isEmailVerified, setIsEmailVerified] = useState(user.isEmailVerified);
    const [photoPreview, setPhotoPreview] = useState(user.avatar);
    const [status] = useState(user.status);

    const onSubmit = (data) => {
        console.log("Form Data:", {
            ...data,
            isBanned,
            isEmailVerified,
        });
        // Handle form submission here
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteUser = () => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            console.log("User deleted");
            // Handle user deletion
        }
    };

    const formFields = [
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
                            message: "Invalid email format",
                        },
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

    const getStatusBadgeClass = () => {
        switch (status) {
            case "pending":
                return "badge-warning";
            case "active":
                return "badge-success";
            case "banned":
                return "badge-error";
            default:
                return "badge-ghost";
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-7xl">
            {/* Breadcrumbs */}
            <div className="text-sm breadcrumbs mb-4">
                <ul>
                    <li>Dashboard</li>
                    <li>User</li>
                    <li>Edit</li>
                </ul>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">Edit user</h1>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Photo Upload & Settings */}
                        <div className="lg:col-span-1">
                            <div className="card bg-base-100 shadow-xl p-6">
                                {/* Status Badge */}
                                <div className="flex justify-center mb-4">
                                    <span className={`badge ${getStatusBadgeClass()} capitalize`}>
                                        {status}
                                    </span>
                                </div>

                                {/* Photo Upload */}
                                <div className="flex flex-col items-center mb-6">
                                    <div className="relative">
                                        <div className="w-32 h-32 rounded-full bg-base-200 flex items-center justify-center overflow-hidden">
                                            {photoPreview ? (
                                                <img
                                                    src={photoPreview}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <Camera size={40} className="text-base-content/40" />
                                            )}
                                        </div>
                                        <input
                                            type="file"
                                            id="photo-upload"
                                            className="hidden"
                                            accept=".jpeg,.jpg,.png,.gif"
                                            onChange={handlePhotoUpload}
                                        />
                                        <label
                                            htmlFor="photo-upload"
                                            className="absolute bottom-0 right-0 btn btn-circle btn-sm btn-neutral cursor-pointer"
                                        >
                                            <Camera size={16} />
                                        </label>
                                    </div>
                                    <p className="text-center text-xs text-base-content/40 mt-4">
                                        Allowed *.jpeg, *.jpg, *.png, *.gif
                                        <br />
                                        max size of 3 Mb
                                    </p>
                                </div>

                                {/* Banned Toggle */}
                                <div className="divider"></div>
                                <div className="flex flex-col gap-2 mb-4">
                                    <h3 className="font-bold">Banned</h3>
                                    <div className="flex items-start justify-between gap-3">
                                        <p className="text-sm text-base-content/60 flex-1">
                                            Apply disable account
                                        </p>
                                        <input
                                            type="checkbox"
                                            className="toggle toggle-error"
                                            checked={isBanned}
                                            onChange={(e) => setIsBanned(e.target.checked)}
                                        />
                                    </div>
                                </div>

                                {/* Email Verification Toggle */}
                                <div className="flex flex-col gap-2 mb-6">
                                    <h3 className="font-bold">Email verified</h3>
                                    <div className="flex items-start justify-between gap-3">
                                        <p className="text-sm text-base-content/60 flex-1">
                                            Disabling this will automatically send the user a
                                            verification email
                                        </p>
                                        <input
                                            type="checkbox"
                                            className="toggle toggle-primary"
                                            checked={isEmailVerified}
                                            onChange={(e) => setIsEmailVerified(e.target.checked)}
                                        />
                                    </div>
                                </div>

                                {/* Delete User Button */}
                                <button
                                    type="button"
                                    onClick={handleDeleteUser}
                                    className="btn btn-error btn-outline w-full"
                                >
                                    Delete user
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Form Fields */}
                        <div className="lg:col-span-2">
                            <div className="card bg-base-100 shadow-xl p-6">
                                <div className="space-y-6">
                                    {formFields.map((row) => (
                                        <div
                                            key={row.row}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        >
                                            {row.fields.map((field) => (
                                                <div key={field.name} className="relative">
                                                    <InputField config={field} />
                                                    {field.name === "phoneNumber" && (
                                                        <button
                                                            type="button"
                                                            className="absolute right-3 top-10 btn btn-ghost btn-xs btn-circle"
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end mt-6">
                                    <button type="submit" className="btn btn-neutral">
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default EditUser;
