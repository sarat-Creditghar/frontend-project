import React from 'react';
import { ChevronDown } from 'lucide-react';

const AccountBillingPlan = ({ plans, billingInfo }) => {
    return (
        <div className="card bg-base-100 shadow-xl p-6 mb-6">
            <h3 className="text-lg font-bold mb-6">Plan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className={`border rounded-xl p-6 relative flex flex-col justify-between h-full transition-all ${plan.isCurrent ? 'border-primary shadow-lg ring-1 ring-primary ring-opacity-50' : 'border-base-200'
                            }`}
                    >
                        {plan.isCurrent && (
                            <div className="absolute top-4 right-4 badge badge-info badge-sm text-white gap-1 font-medium">
                                Current
                            </div>
                        )}

                        <div className="mb-4">
                            <div className="w-12 h-12 mb-4">
                                <img src={plan.icon} alt={plan.type} className="w-full h-full object-contain" />
                            </div>
                            <h4 className="font-bold text-gray-500 text-sm mb-2">{plan.type}</h4>
                            <div className="flex items-baseline">
                                <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                                {plan.period && <span className="text-gray-400 text-sm ml-1">{plan.period}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mb-8">
                <div className="text-sm text-gray-500 font-medium mb-4">Plan</div>

                <div className="space-y-4">
                    {billingInfo?.map((info) => (
                        <div key={info.id} className="flex flex-col sm:flex-row sm:items-center">
                            <div className="w-48 text-sm text-gray-500 mb-1 sm:mb-0">{info.title}</div>
                            <div className="flex items-center gap-2 font-medium text-gray-700">
                                {info.value}
                                {info.hasDropdown && <ChevronDown size={16} className="text-gray-400 cursor-pointer" />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end gap-3">
                <button className="btn btn-ghost border-gray-200 text-gray-700 hover:bg-gray-50">Cancel plan</button>
                <button className="btn btn-neutral text-white">Upgrade plan</button>
            </div>
        </div>
    );
};

export default AccountBillingPlan;
