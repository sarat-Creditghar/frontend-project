import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const UserCard = ({ user }) => {
    return (
        <div className="card bg-base-100 shadow-xl overflow-hidden">
            {/* Cover Image */}
            <div className="h-48 w-full relative">
                <img
                    src={user.coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                {/* Avatar */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-base-100 ring-offset-base-100 ring-offset-2 bg-base-100">
                            <img src={user.avatar} alt={user.name} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Body */}
            <div className="card-body items-center text-center pt-16 pb-6">
                <h3 className="card-title text-lg font-bold">{user.name}</h3>
                <p className="text-sm text-base-content/60">{user.role}</p>

                {/* Social Links */}
                <div className="flex gap-3 mt-4">
                    <a
                        href={user.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-circle btn-sm hover:text-blue-600"
                    >
                        <Facebook size={18} />
                    </a>
                    <a
                        href={user.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-circle btn-sm hover:text-pink-600"
                    >
                        <Instagram size={18} />
                    </a>
                    <a
                        href={user.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-circle btn-sm hover:text-blue-700"
                    >
                        <Linkedin size={18} />
                    </a>
                    <a
                        href={user.social.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost btn-circle btn-sm hover:text-sky-500"
                    >
                        <Twitter size={18} />
                    </a>
                </div>

                {/* Stats */}
                <div className="divider my-4"></div>
                <div className="flex justify-around w-full text-center">
                    <div>
                        <div className="text-lg font-bold">{user.stats.followers}</div>
                        <div className="text-xs text-base-content/60">Follower</div>
                    </div>
                    <div className="divider divider-horizontal mx-0"></div>
                    <div>
                        <div className="text-lg font-bold">{user.stats.following}</div>
                        <div className="text-xs text-base-content/60">Following</div>
                    </div>
                    <div className="divider divider-horizontal mx-0"></div>
                    <div>
                        <div className="text-lg font-bold">{user.stats.totalPosts}</div>
                        <div className="text-xs text-base-content/60">Total post</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
