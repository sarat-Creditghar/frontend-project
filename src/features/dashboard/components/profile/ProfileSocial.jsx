import React from "react";

const ProfileSocial = ({ social }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-6">
                <h3 className="card-title text-lg">Social</h3>
                <div className="space-y-3">
                    {social.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 text-sm hover:underline"
                        >
                            <span className={`font-bold ${item.color} capitalize`}>
                                {item.platform}
                            </span>
                            <span className="truncate text-base-content/70">
                                {item.url}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileSocial;
