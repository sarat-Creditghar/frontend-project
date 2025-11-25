import React from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../features/auth/hooks/useAuth";

const ProfileDropdown = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/signin");
    };
    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
            >
                <div className="w-10 rounded-full">
                    <img
                        alt="img"
                        src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
                    />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                <li>
                    <Link to="/dashboard" className="justify-between">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/" className="justify-between">
                        Home
                    </Link>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileDropdown;
