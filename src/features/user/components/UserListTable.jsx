import React, { useState } from "react";
import { Pencil, MoreVertical, Search} from "lucide-react";
import userListData from "../data/userListData.json";

const UserListTable = () => {
    const { users, stats } = userListData;
    const [activeTab, setActiveTab] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [roleFilter, setRoleFilter] = useState("Role");
    const [selectedUsers, setSelectedUsers] = useState([]);

    const tabs = [
        { id: "All", label: "All", count: stats.all },
        { id: "Active", label: "Active", count: stats.active, color: "bg-success text-success-content" },
        { id: "Pending", label: "Pending", count: stats.pending, color: "bg-warning text-warning-content" },
        { id: "Banned", label: "Banned", count: stats.banned, color: "bg-error text-error-content" },
        { id: "Rejected", label: "Rejected", count: stats.rejected, color: "bg-base-300 text-base-content" },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case "Active": return "badge-soft-success text-success";
            case "Pending": return "badge-soft-warning text-warning";
            case "Banned": return "badge-soft-error text-error";
            case "Rejected": return "badge-soft-neutral text-neutral";
            default: return "badge-ghost";
        }
    };

    // Filter logic
    const filteredUsers = users.filter((user) => {
        const matchesTab = activeTab === "All" || user.status === activeTab;
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = roleFilter === "Role" || user.role === roleFilter;
        return matchesTab && matchesSearch && matchesRole;
    });

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedUsers(filteredUsers.map(u => u.id));
        } else {
            setSelectedUsers([]);
        }
    };

    const handleSelectUser = (id) => {
        if (selectedUsers.includes(id)) {
            setSelectedUsers(selectedUsers.filter(userId => userId !== id));
        } else {
            setSelectedUsers([...selectedUsers, id]);
        }
    };

    return (
        <div className="card bg-base-100 shadow-sm border border-base-200 rounded-2xl">
            {/* Tabs */}
            <div className="border-b border-base-200 px-6 pt-4">
                <div className="flex gap-6 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-4 flex items-center gap-2 border-b-2 transition-all ${activeTab === tab.id
                                    ? "border-black text-black font-semibold"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab.label}
                            <span className={`badge badge-sm border-none ${activeTab === tab.id ? "bg-black text-white" : "bg-gray-200 text-gray-600"
                                }`}>
                                {tab.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Filters */}
            <div className="p-5 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <select
                    className="select select-bordered w-full sm:w-40 font-medium text-gray-600"
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                >
                    <option>Role</option>
                    <option>Content Creator</option>
                    <option>IT Administrator</option>
                    <option>Financial Planner</option>
                    <option>HR Recruiter</option>
                    <option>Graphic Designer</option>
                    <option>Data Analyst</option>
                    <option>Marketing Manager</option>
                    <option>Sales Representative</option>
                </select>

                <div className="relative w-full sm:w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered w-full pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className="btn btn-ghost btn-circle">
                    <MoreVertical size={20} className="text-gray-500" />
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead className="bg-base-100 border-b border-base-200 text-gray-500">
                        <tr>
                            <th className="w-12 pl-6">
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-sm rounded-md"
                                        onChange={handleSelectAll}
                                        checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                                    />
                                </label>
                            </th>
                            <th className="font-semibold text-sm">Name</th>
                            <th className="font-semibold text-sm">Phone number</th>
                            <th className="font-semibold text-sm">Company</th>
                            <th className="font-semibold text-sm">Role</th>
                            <th className="font-semibold text-sm">Status</th>
                            <th className="w-16"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-base-50 transition-colors border-b border-base-100 last:border-none">
                                <th className="pl-6">
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-sm rounded-md"
                                            checked={selectedUsers.includes(user.id)}
                                            onChange={() => handleSelectUser(user.id)}
                                        />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="w-10 h-10 rounded-full">
                                                <img src={user.avatar} alt={user.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{user.name}</div>
                                            <div className="text-sm text-gray-500">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-gray-600">{user.phone}</td>
                                <td className="text-gray-600">{user.company}</td>
                                <td className="text-gray-600">{user.role}</td>
                                <td>
                                    <div className={`badge border-none font-semibold ${user.status === 'Active' ? 'bg-green-100 text-green-700' :
                                            user.status === 'Pending' ? 'bg-orange-100 text-orange-700' :
                                                user.status === 'Banned' ? 'bg-red-100 text-red-700' :
                                                    'bg-gray-100 text-gray-700'
                                        }`}>
                                        {user.status}
                                    </div>
                                </td>
                                <td>
                                    <div className="flex items-center justify-end gap-1 pr-4">
                                        <button className="btn btn-ghost btn-sm btn-square text-gray-500">
                                            <Pencil size={18} />
                                        </button>
                                        <button className="btn btn-ghost btn-sm btn-square text-gray-500">
                                            <MoreVertical size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserListTable;
