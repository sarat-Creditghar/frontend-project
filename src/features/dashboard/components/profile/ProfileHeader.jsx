import React from "react";
import { MapPin, Mail, Briefcase, School } from "lucide-react";

const ProfileHeader = ({ user }) => {
    return (
        <div className="card bg-base-100 shadow-xl w-full mb-6 overflow-hidden">
            <div className="h-48 md:h-64 w-full relative">
                <img
                    src={user.coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-16 left-4 md:left-10">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.avatar} alt="Avatar" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20 pb-6 px-4 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                    <h2 className="text-2xl font-bold">{user.name}</h2>
                    <p className="text-gray-500">{user.role}</p>
                </div>
                
            </div>
        </div>
    );
};

export default ProfileHeader;
