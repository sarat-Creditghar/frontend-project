import React from "react";
import ProfileHeader from "../../features/dashboard/components/profile/ProfileHeader";
import ProfileAbout from "../../features/dashboard/components/profile/ProfileAbout";
import ProfileSocial from "../../features/dashboard/components/profile/ProfileSocial";
import ProfileStats from "../../features/dashboard/components/profile/ProfileStats";
import ProfilePost from "../../features/dashboard/components/profile/ProfilePost";
import ProfilePostInput from "../../features/dashboard/components/profile/ProfilePostInput";
import profileData from "../../features/dashboard/data/profileData.json";

const Profilecard = () => {
  const { user, posts } = profileData;

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li>Dashboard</li>
          <li>User</li>
          <li>Profile</li>
        </ul>
      </div>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <ProfileHeader user={user} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <ProfileStats stats={user.stats} />
          <ProfileAbout about={user.about} info={user.info} />
          <ProfileSocial social={user.social} />
        </div>

        <div className="lg:col-span-2 space-y-6">
          <ProfilePostInput />
          {posts.map((post) => (
            <ProfilePost key={post.id} post={post} currentUser={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
