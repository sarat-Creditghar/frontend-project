import React from 'react';
import notificationsData from '../data/notificationsData.json';

const AccountNotifications = () => {
    return (
        <div className="card bg-base-100 shadow-xl p-6">
            {notificationsData.map((section, index) => (
                <div key={section.id} className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${index !== notificationsData.length - 1 ? 'mb-8' : ''}`}>
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-bold text-gray-700">{section.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                    </div>

                    <div className="md:col-span-2 bg-gray-50 rounded-xl p-6">
                        <div className="flex flex-col gap-4">
                            {section.items.map((item) => (
                                <div key={item.id} className="form-control">
                                    <label className="label cursor-pointer flex justify-between">
                                        <span className="label-text font-medium text-gray-700">{item.label}</span>
                                        <input type="checkbox" className="toggle toggle-primary" defaultChecked={item.defaultChecked} />
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-end mt-8 pt-6 border-t border-gray-100">
                <button className="btn btn-neutral">Save changes</button>
            </div>
        </div>
    );
};

export default AccountNotifications;
