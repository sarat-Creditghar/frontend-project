import { useState } from "react";
import { iconRegistry } from "../config/iconRegistry";
import { ChevronDown } from "lucide-react";

const SidebarList = ({ items, isDrawerOpen,onSelect, activePage  }) => {
  const Icon = iconRegistry[items.icon];

  const [expanded, setExpanded] = useState(false);

//   console.log(isDrawerOpen);

  const toggle = () => {
    if (isDrawerOpen) {
      setExpanded((prev) => !prev);
    }
  };

  const hasChildren = items.children && items.children.length > 0;


   const handleClick = () => {
    if (hasChildren) {
      toggle();
    } else {
      onSelect(); // Call onSelect only if no children
    }
  };

  return (
    <div>
      {/* List item */}
      <li className="" onClick={onSelect}>
        <button
           onClick={handleClick}
          className={`hover:bg-accent w-full is-drawer-open:my-1 is-drawer-close:-my-1 p-1 rounded-lg is-drawer-close:justify-center ${
            activePage === items.id ? "bg-accent" : "" 
          }`}
          data-tip="Homepage"
        >
          {/* Home icon */}
          <div className="flex items-center  is-drawer-open:gap-2 is-drawer-close:flex-col is-drawer-close:scale-80 is-drawer-close:scroll-y is-drawer-open:justify-between w-full ">
            <div className="flex items-center is-drawer-open:gap-2 is-drawer-close:flex-col ">
              {Icon && <Icon size={25} />}
              <span className="is-drawer-close:text-sm">{items.title}</span>
            </div>
            {hasChildren && (
              <ChevronDown
                size={16}
                className={`is-drawer-close:hidden transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            )}
          </div>
        </button>
      </li>

      {/* Render children if they exist */}
      {expanded && hasChildren && (
        <ul className="is-drawer-open:ml-4 is-drawer-open:mt-1">
          {items.children.map((child) => (
            <SidebarList key={child.id} items={child}   isDrawerOpen={isDrawerOpen} 
              onSelect={() => onSelect()} 
              activePage={activePage} />
          ))}
        </ul>
      )}

      
    </div>
  );
};

export default SidebarList;
