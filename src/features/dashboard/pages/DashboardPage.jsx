import React, { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";

import { ChevronDown } from "lucide-react";
import { navConfig } from "../data/navconfig";

import SidebarList from "../components/SidebarList";
import ThemeToggle from "../../theme/components/ThemeToggle";
import ProfileDropdown from "../../../shared/components/ProfileDropdown";


const Dashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the last part of the path to use as the active ID, or default to 'app'
  const activePage = location.pathname.split("/").pop() === "dashboard" ? "app" : location.pathname.split("/").pop();

  const handleSelect = (id) => {
    navigate(`/dashboard/${id}`);
  };

  return (
    <div className="drawer lg:drawer-open ">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        onChange={(e) => setIsDrawerOpen(e.target.checked)}
      />
      <div className="drawer-content">
        {/* Navbar */}

        <nav className="navbar w-full backdrop-blur-sm bg-accent/50 fixed z-11">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-circle  rotate-90   absolute -left-2 z-5 size-5 "
          >
            {/* Sidebar toggle icon */}
            <ChevronDown />
          </label>
          <div className="px-4">Navbar Title</div>

          <div className="navbar-end absolute  right-75">
            <ThemeToggle />
            <ProfileDropdown />
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4 mt-12">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-100 lg:border lg:border-slate-300 is-drawer-close:w-20 is-drawer-open:w-64 is-drawer-open:p-2 is-drawer-close:p-1">
          {/* Sidebar content here */}
          <div className="logo-container  w-full  h-16 flex items-center p-3 is-drawer-open:p-6">
            <p className="font-extrabold text-xl">Logo</p>
          </div>

          {navConfig.map((t) => (
            <div key={t.id} className="mb-4 w-full ">
              <label className="is-drawer-close:hidden menu-title px-2 ">
                {t.title}
              </label>
              <ul>
                {t.items.map((items) => (
                  <SidebarList
                    key={items.id}
                    items={items}
                    isDrawerOpen={isDrawerOpen}
                    onSelect={handleSelect}
                    activePage={activePage}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
