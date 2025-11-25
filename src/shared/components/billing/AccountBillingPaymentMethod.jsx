import React from 'react';
import { MoreVertical, Plus } from 'lucide-react';

const AccountBillingPaymentMethod = ({ cards }) => {
    return (
        <div className="card bg-base-100 shadow-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Payment method</h3>
                <button className="btn btn-ghost btn-sm text-primary gap-1">
                    <Plus size={16} /> Add card
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cards.map((card) => (
                    <div key={card.id} className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between relative">
                        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                            <MoreVertical size={16} />
                        </button>

                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-8 bg-white border rounded flex items-center justify-center p-1">
                                <img src={card.logo} alt={card.type} className="max-w-full max-h-full" />
                            </div>
                            {card.isDefault && (
                                <span className="badge badge-info badge-sm text-white text-xs">Default</span>
                            )}
                        </div>

                        <div className="text-sm font-semibold text-gray-700">
                            {card.number}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccountBillingPaymentMethod;
