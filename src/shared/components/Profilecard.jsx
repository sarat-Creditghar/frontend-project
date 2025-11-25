import React from "react";
import ProfileHeader from "../../features/dashboard/components/profile/ProfileHeader";
import ProfileAbout from "../../features/dashboard/components/profile/ProfileAbout";
import ProfileSocial from "../../features/dashboard/components/profile/ProfileSocial";
import ProfileStats from "../../features/dashboard/components/profile/ProfileStats";
import ProfilePost from "../../features/dashboard/components/profile/ProfilePost";
import ProfilePostInput from "../../features/dashboard/components/profile/ProfilePostInput";
import ProfileFollowers from "../../features/dashboard/components/profile/ProfileFollowers";
import ProfileFriends from "../../features/dashboard/components/profile/ProfileFriends";
import ProfileGallery from "../../features/dashboard/components/profile/ProfileGallery";
import profileData from "../../features/dashboard/data/profileData.json";

import { useSearchParams } from "react-router";

const Profilecard = () => {
  const { user, posts } = profileData;
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'Profile';

  const handleTabChange = (tabId) => {
    setSearchParams({ tab: tabId });
  };

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

      <ProfileHeader user={user} activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === 'Profile' ? (
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
      ) : activeTab === 'Followers' ? (
        <ProfileFollowers followers={user.followers} />
      ) : activeTab === 'Friends' ? (
        <ProfileFriends friends={user.friends} />
      ) : activeTab === 'Gallery' ? (
        <ProfileGallery gallery={user.gallery} />
      ) : (
        <div className="card bg-base-100 shadow-xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>
          <p className="text-gray-500">This section is currently under construction.</p>
        </div>
      )}
    </div>
  );
};

export default Profilecard;
