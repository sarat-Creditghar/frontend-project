import { useState } from "react";
import { iconRegistry } from "../config/iconRegistry";
import { ChevronDown } from "lucide-react";

const SidebarList = ({ items, isDrawerOpen, onSelect, activePage }) => {
  const Icon = iconRegistry[items.icon];
  const [expanded, setExpanded] = useState(false);

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
      onSelect();
    }
  };

  return (
    <div className="relative group">
      {/* List item */}
      <li onClick={!hasChildren ? onSelect : undefined}>
        <button
          onClick={handleClick}
          className={`hover:bg-accent w-full is-drawer-open:my-1 is-drawer-close:-my-1 p-1 rounded-lg is-drawer-close:justify-center ${activePage === items.id ? "bg-accent" : ""
            }`}
          data-tip={!isDrawerOpen ? items.title : ""}
        >
          {/* Icon and Title */}
          <div className="flex items-center is-drawer-open:gap-2 is-drawer-close:flex-col is-drawer-close:scale-80 is-drawer-open:justify-between w-full">
            <div className="flex items-center is-drawer-open:gap-2 is-drawer-close:flex-col">
              {Icon && <Icon size={25} />}
              <span className="is-drawer-close:text-sm">{items.title}</span>
            </div>
            {hasChildren && (
              <ChevronDown
                size={16}
                className={`is-drawer-close:hidden transition-transform duration-200 ${expanded ? "rotate-180" : ""
                  }`}
              />
            )}
          </div>
        </button>
      </li>

      {/* Expanded Children (Drawer Open) */}
      {isDrawerOpen && expanded && hasChildren && (
        <ul className="ml-4 mt-1">
          {items.children.map((child) => (
            <SidebarList
              key={child.id}
              items={child}
              isDrawerOpen={isDrawerOpen}
              onSelect={onSelect}
              activePage={activePage}
            />
          ))}
        </ul>
      )}

      {/* Hover Dropdown (Drawer Closed) */}
      {!isDrawerOpen && hasChildren && (
        <div className="absolute left-full top-0  w-48 bg-base-100 shadow-lg rounded-lg p-2 hidden group-hover:block z-50 border border-base-200">
          <ul className="menu menu-sm">
            {items.children.map((child) => (
              <li key={child.id}>
                <a
                  onClick={() => {
                    onSelect();
                  }}
                  className={activePage === child.id ? "active" : ""}
                >
                  {child.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SidebarList;
