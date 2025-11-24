import React from "react";
import { MapPin, Mail, Briefcase, School } from "lucide-react";

const ProfileAbout = ({ about, info }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-6">
                <h3 className="card-title text-lg">About</h3>
                <p className="text-sm text-base-content/70">{about}</p>
                <div className="space-y-3 mt-4">
                    {info.map((item, index) => {
                        const Icon = { MapPin, Mail, Briefcase, School }[item.icon];
                        return (
                            <div key={index} className="flex items-center gap-3 text-sm">
                                {Icon && <Icon size={18} />}
                                <span>{item.text}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProfileAbout;
