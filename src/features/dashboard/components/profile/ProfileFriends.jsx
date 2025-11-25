import React from "react";
import { MoreVertical, Search, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const ProfileFriends = ({ friends }) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Friends</h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search friends..."
                        className="input input-bordered w-full max-w-xs pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {friends.map((friend) => (
                    <div key={friend.id} className="card bg-base-100 shadow-sm border border-base-200 p-6 flex flex-col items-center text-center relative">
                        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <MoreVertical size={20} />
                        </button>

                        <div className="avatar mb-4">
                            <div className="w-16 h-16 rounded-full">
                                <img src={friend.avatar} alt={friend.name} />
                            </div>
                        </div>

                        <h4 className="font-semibold text-lg">{friend.name}</h4>
                        <p className="text-gray-500 text-sm mb-4">{friend.role}</p>

                        <div className="flex gap-3 mt-auto">
                            <a href={friend.social.facebook} className="text-blue-600 hover:opacity-80"><Facebook size={20} /></a>
                            <a href={friend.social.instagram} className="text-pink-600 hover:opacity-80"><Instagram size={20} /></a>
                            <a href={friend.social.linkedin} className="text-blue-700 hover:opacity-80"><Linkedin size={20} /></a>
                            <a href={friend.social.twitter} className="text-black hover:opacity-80"><Twitter size={20} /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileFriends;
