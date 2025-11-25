import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import InputField from './InputField';
import accountData from '../../features/dashboard/data/accountData.json';

const AccountGeneral = () => {
    const methods = useForm({
        defaultValues: {
            name: "Jaydon Frankie",
            email: "demo@minimals.cc",
            phone: "(416) 555-0198",
            address: "90210 Broadway Blvd",
            country: "Canada",
            state: "California",
            city: "San Francisco",
            zip: "94116",
            about: "Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus."
        }
    });

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column: Avatar and Actions */}
                    <div className="lg:col-span-1">
                        <div className="card bg-base-100 shadow-xl p-6 flex flex-col items-center text-center">
                            <div className="relative mb-4">
                                <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors">
                                    <img
                                        src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <span className="text-white text-xs font-semibold">Update Photo</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mb-6">
                                Allowed *.jpeg, *.jpg, *.png, *.gif
                                <br />
                                max size of 3 Mb
                            </p>

                            <div className="form-control w-full max-w-xs mb-6">
                                <label className="label cursor-pointer justify-between">
                                    <span className="label-text font-semibold">Public profile</span>
                                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                                </label>
                            </div>

                            <button type="button" className="btn btn-error btn-outline btn-sm text-red-500 hover:text-white hover:bg-red-500">
                                Delete user
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-2">
                        <div className="card bg-base-100 shadow-xl p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                {accountData.general.map((field, index) => (
                                    <div key={index} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                                        <InputField config={field} />
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-end mt-4">
                                <button type="submit" className="btn btn-neutral">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
};

export default AccountGeneral;
