import React from 'react';
import { MoreVertical, Plus } from 'lucide-react';

const AccountBillingAddressBook = ({ addresses }) => {
    return (
        <div className="card bg-base-100 shadow-xl p-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Address book</h3>
                <button className="btn btn-ghost btn-sm text-primary gap-1">
                    <Plus size={16} /> Add address
                </button>
            </div>

            <div className="flex flex-col gap-4">
                {addresses.map((address) => (
                    <div key={address.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors relative">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-sm">{address.name}</span>
                                <span className="text-gray-500 text-xs">({address.type})</span>
                                {address.isDefault && (
                                    <span className="badge badge-info badge-sm text-white text-[10px] h-5">Default</span>
                                )}
                            </div>
                            <p className="text-xs text-gray-500 mb-1">{address.fullAddress}</p>
                            <p className="text-xs text-gray-400">{address.phone}</p>
                        </div>
                        <button className="absolute top-2 right-2 md:static text-gray-400 hover:text-gray-600">
                            <MoreVertical size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccountBillingAddressBook;
