import React from "react";
import { MapPin, Check } from "lucide-react";

const ProfileFollowers = ({ followers }) => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Followers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {followers.map((follower) => (
                    <div key={follower.id} className="card bg-base-100 shadow-sm border border-base-200 p-4 flex flex-row items-center gap-4">
                        <div className="avatar">
                            <div className="w-12 h-12 rounded-full">
                                <img src={follower.avatar} alt={follower.name} />
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm truncate">{follower.name}</h4>
                            <div className="flex items-center text-gray-500 text-xs mt-0.5">
                                <MapPin size={12} className="mr-1" />
                                <span className="truncate">{follower.location}</span>
                            </div>
                        </div>
                        <div>
                            <button
                                className={`btn btn-sm ${follower.isFollowed
                                        ? "btn-ghost text-success hover:bg-transparent"
                                        : "btn-outline btn-sm"
                                    }`}
                            >
                                {follower.isFollowed ? (
                                    <>
                                        <Check size={16} />
                                        Followed
                                    </>
                                ) : (
                                    "Follow"
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileFollowers;
