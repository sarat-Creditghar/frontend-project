import React from "react";
import { Plus } from "lucide-react";
import UserCard from "../components/UserCard";
import userCardsData from "../data/userCardsData.json";

const UserList = () => {
  const { users } = userCardsData;

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs mb-4">
        <ul>
          <li>Dashboard</li>
          <li>User</li>
          <li>Cards</li>
        </ul>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Cards</h1>
        <button className="btn btn-neutral gap-2">
          <Plus size={20} />
          Add user
        </button>
      </div>

      {/* User Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;