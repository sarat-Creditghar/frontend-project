import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Camera } from "lucide-react";
import InputField from "../../../shared/components/ui/InputField";
import { createUserFields } from "../data/createUserForm";

const UserCreate = () => {
    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
            country: "",
            state: "",
            city: "",
            address: "",
            zipCode: "",
            company: "",
            role: "",
        },
    });

    const [emailVerified, setEmailVerified] = useState(true);
    const [photoPreview, setPhotoPreview] = useState(null);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
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

    return (
        <div className="container mx-auto p-4 max-w-7xl">
            {/* Breadcrumbs */}
            <div className="text-sm breadcrumbs mb-4">
                <ul>
                    <li>Dashboard</li>
                    <li>User</li>
                    <li>Create</li>
                </ul>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">Create a new user</h1>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Left Column - Photo Upload & Email Verification */}
                        <div className="lg:col-span-1">
                            <div className="card bg-base-100 shadow-xl p-6">
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
                                    <p className="text-center text-xs text-base-content/60 mt-4">
                                        Upload photo
                                    </p>
                                    <p className="text-center text-xs text-base-content/40 mt-1">
                                        Allowed *.jpeg, *.jpg, *.png, *.gif
                                        <br />
                                        max size of 3 Mb
                                    </p>
                                </div>

                                {/* Email Verification Toggle */}
                                <div className="divider"></div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-bold">Email verified</h3>
                                    <div className="flex items-start justify-between gap-3">
                                        <p className="text-sm text-base-content/60 flex-1">
                                            Disabling this will automatically send the user a
                                            verification email
                                        </p>
                                        <input
                                            type="checkbox"
                                            className="toggle toggle-primary"
                                            checked={emailVerified}
                                            onChange={(e) => setEmailVerified(e.target.checked)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form Fields */}
                        <div className="lg:col-span-2">
                            <div className="card bg-base-100 shadow-xl p-6">
                                <div className="space-y-6">
                                    {createUserFields.map((row) => (
                                        <div
                                            key={row.row}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                        >
                                            {row.fields.map((field) => (
                                                <InputField key={field.name} config={field} />
                                            ))}
                                        </div>
                                    ))}
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end mt-6">
                                    <button type="submit" className="btn btn-neutral">
                                        Create user
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

export default UserCreate;