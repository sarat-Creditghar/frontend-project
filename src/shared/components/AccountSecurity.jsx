import React, { useState } from 'react';
import { Eye, EyeOff, Info } from 'lucide-react';
import securityData from '../../features/dashboard/data/securityData.json';

const AccountSecurity = () => {
    const [showPasswords, setShowPasswords] = useState({});

    const togglePasswordVisibility = (fieldName) => {
        setShowPasswords(prev => ({
            ...prev,
            [fieldName]: !prev[fieldName]
        }));
    };

    return (
        <div className="card bg-base-100 shadow-xl p-6">
            <div className="flex flex-col gap-4">
                {securityData.map((field) => (
                    <div key={field.name} className="form-control">
                        <div className="relative">
                            <input
                                type={showPasswords[field.name] ? "text" : "password"}
                                placeholder={field.label}
                                className="input input-bordered w-full pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => togglePasswordVisibility(field.name)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                            >
                                {showPasswords[field.name] ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>
                        {field.helperText && (
                            <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                                <Info size={14} />
                                <span>{field.helperText}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-6">
                <button className="btn btn-neutral">Save changes</button>
            </div>
        </div>
    );
};

export default AccountSecurity;
