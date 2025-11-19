import React, { useState } from "react";
import { navConfig } from "../data/navconfig";
import SidebarItems from "./SidebarItems";
import { ChevronUp } from "lucide-react";
import AppPageLayout from "./AppPageLayout";

const SidebarDash = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      
      <div className="drawer lg:drawer-open ">
        
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle"  onChange={(e) => setDrawerOpen(e.target.checked)} />
        
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300 fixed z-11">
           <div className=" "><label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className={`btn btn-circle  absolute -left-3.5 top-4 z-99 ${drawerOpen? 'rotate-270' : 'rotate-90'} size-7`  }
            >
              {/* Sidebar toggle icon */}
              <ChevronUp size={18} />
            </label></div>
            <div className="px-4">Navbar Title</div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            <AppPageLayout/>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
           
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-25 is-drawer-open:w-75">
            {/* Sidebar content here */}
            <div className="h-15 flex items-center justify-between w-full">
              <h1>Logo</h1>
              
            </div>

            {/*side bar items*/}
            <ul className="menu w-full grow -ml-5">
              {/* List item */}
              
              <SidebarItems item={navConfig[0]} drawerOpen={drawerOpen}/>
              <SidebarItems item={navConfig[1]}  drawerOpen={drawerOpen}/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDash;
