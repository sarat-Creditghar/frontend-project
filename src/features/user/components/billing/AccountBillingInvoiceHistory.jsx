import React from 'react';

const AccountBillingInvoiceHistory = ({ invoices }) => {
    return (
        <div className="card bg-base-100 shadow-xl p-6 h-fit">
            <h3 className="text-lg font-bold mb-6">Invoice history</h3>
            <div className="flex flex-col gap-4">
                {invoices.map((invoice) => (
                    <div key={invoice.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700">{invoice.id}</p>
                                <p className="text-xs text-gray-500">{invoice.date}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-gray-700">{invoice.amount}</p>
                            <button className="text-xs text-blue-600 hover:underline">PDF</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <button className="btn btn-xs btn-ghost">Show less</button>
            </div>
        </div>
    );
};

export default AccountBillingInvoiceHistory;
