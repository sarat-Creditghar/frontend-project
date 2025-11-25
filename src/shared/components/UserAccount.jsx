import React, { useState } from 'react';
import { User, FileText, Bell, Share2, Key } from 'lucide-react';
import AccountGeneral from './AccountGeneral';
import AccountBilling from './AccountBilling';
import AccountNotifications from './AccountNotifications';
import AccountSocialLinks from './AccountSocialLinks';
import AccountSecurity from './AccountSecurity';

const UserAccount = () => {
    const [activeTab, setActiveTab] = useState('General');

    const tabs = [
        { id: 'General', label: 'General', icon: User },
        { id: 'Billing', label: 'Billing', icon: FileText },
        { id: 'Notifications', label: 'Notifications', icon: Bell },
        { id: 'Social links', label: 'Social links', icon: Share2 },
        { id: 'Security', label: 'Security', icon: Key },
    ];

    return (
        <div className="container mx-auto p-4 max-w-7xl">
            <h2 className="text-2xl font-bold mb-6">Account</h2>

            {/* Tabs */}
            <div className="flex overflow-x-auto gap-8 mb-8 border-b border-gray-200">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 pb-3 border-b-2 transition-colors whitespace-nowrap px-1 ${isActive
                                    ? "border-black text-black font-semibold"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            <Icon size={20} />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Content */}
            <div className="mt-6">
                {activeTab === 'General' ? (
                    <AccountGeneral />
                ) : activeTab === 'Billing' ? (
                    <AccountBilling />
                ) : activeTab === 'Notifications' ? (
                    <AccountNotifications />
                ) : activeTab === 'Social links' ? (
                    <AccountSocialLinks />
                ) : activeTab === 'Security' ? (
                    <AccountSecurity />
                ) : (
                    <div className="card bg-base-100 shadow-xl p-10 text-center">
                        <h3 className="text-xl font-bold mb-2">{activeTab}</h3>
                        <p className="text-gray-500">This section is under construction.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserAccount;
