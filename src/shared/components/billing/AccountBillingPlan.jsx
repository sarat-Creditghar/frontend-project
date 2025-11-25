import React from 'react';
import { Check } from 'lucide-react';

const AccountBillingPlan = ({ plans }) => {
    return (
        <div className="card bg-base-100 shadow-xl p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`border rounded-xl p-6 relative flex flex-col justify-between h-full ${plan.isCurrent ? 'border-primary shadow-md' : 'border-gray-200'
                            }`}
                    >
                        {plan.isCurrent && (
                            <div className="absolute top-4 right-4 badge badge-info badge-sm text-white gap-1">
                                Current
                            </div>
                        )}

                        <div className="mb-4">
                            {/* Placeholder for Plan Icon - using a simple colored box if no icon, or the image provided in JSON */}
                            <div className="w-12 h-12 rounded-lg bg-base-200 mb-4 overflow-hidden">
                                {/* Ideally we'd use the icon from JSON, but for now let's just use a colored box or the image */}
                                <img src={plan.icon} alt={plan.type} className="w-full h-full object-cover opacity-80" />
                            </div>
                            <h4 className="font-bold text-gray-500 uppercase text-xs mb-1">{plan.type}</h4>
                            <div className="flex items-baseline">
                                <span className="text-2xl font-bold">{plan.price}</span>
                                {plan.period && <span className="text-gray-500 text-sm ml-1">{plan.period}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-gray-500">
                    {/* Additional plan info could go here */}
                </div>
                <div className="flex gap-3">
                    <button className="btn btn-ghost btn-sm">Cancel plan</button>
                    <button className="btn btn-neutral btn-sm">Upgrade plan</button>
                </div>
            </div>
        </div>
    );
};

export default AccountBillingPlan;
