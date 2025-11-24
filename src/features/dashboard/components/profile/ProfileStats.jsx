import React from "react";

const ProfileStats = ({ stats }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body flex-row justify-around text-center p-6">
                <div>
                    <div className="stat-value text-2xl font-bold">{stats.followers}</div>
                    <div className="stat-desc">Follower</div>
                </div>
                <div className="divider divider-horizontal m-0"></div>
                <div>
                    <div className="stat-value text-2xl font-bold">{stats.following}</div>
                    <div className="stat-desc">Following</div>
                </div>
            </div>
        </div>
    );
};

export default ProfileStats;
