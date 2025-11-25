import React from "react";
import { MapPin, Mail, Briefcase, School, User, Heart, Users, Image } from "lucide-react";

const ProfileHeader = ({ user, activeTab, onTabChange }) => {
    const tabs = [
        { id: 'Profile', label: 'Profile', icon: User },
        { id: 'Followers', label: 'Followers', icon: Heart },
        { id: 'Friends', label: 'Friends', icon: Users },
        { id: 'Gallery', label: 'Gallery', icon: Image },
    ];

    return (
        <div className="card bg-base-100 shadow-xl w-full  mb-6 overflow-hidden ">
            {/*header background*/}
            <div className="h-48 md:h-64 w-full relative">
                <img
                    src={user.coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="px-4 md:px-10 pb-4">
                <div className="flex flex-col md:flex-row justify-between items-end -mt-12 md:-mt-16 mb-4">
                    
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
                        
                        <div className="avatar">
                            <div className="w-24 md:w-32 rounded-full ring-4 ring-base-100 ring-offset-0">
                                <img src={user.avatar} alt="Avatar" />
                            </div>
                        </div>
                        <div className="text-center md:text-left mb-2 md:mb-4">
                            <h2 className="text-2xl font-bold text-base-content md:text-white mix-blend-difference">{user.name}</h2>
                            <p className="text-gray-500 md:text-gray-200 font-medium">{user.role}</p>
                        </div>
                    </div>

                    <div className="flex gap-6 mt-4 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => onTabChange(tab.id)}
                                    className={`flex items-center gap-2 pb-2 border-b-2 transition-colors whitespace-nowrap ${isActive
                                            ? "border-primary text-primary font-semibold"
                                            : "border-transparent text-gray-500 hover:text-base-content"
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
