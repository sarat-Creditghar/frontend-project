import { ChevronDown, ChevronUp } from "lucide-react";
import { iconRegistry } from "../config/iconRegistry";
import { useState } from "react";

const SidebarItems = ({ item}) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded((prev) => !prev);

  const hasChildren = item.children && item.children.length > 0;
//   const hasItems = item.items && item.items.length > 0;

  // FIXED: Resolve icon string to component
  const Icon = iconRegistry[item.icon];

 

  return (
    <li>
      <button
        onClick={toggle}
        className="flex items-center justify-start     is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:flex-col"
      >
        {/* ICON RENDERED HERE */}
        {Icon && <Icon size={18} />}

        <span className="is-drawer-close:text-[10px]">{item.title}</span>
        <span className="is-drawer-close:hidden">{item.item}</span>

        {/* {(hasChildren ) && (
          <span className=" ">{expanded ? <ChevronDown size={15}/>  : <ChevronUp size={15}/>}</span>
        )} */}
      </button>

      {expanded && hasChildren && (
        <ul >
          {item.children.map((child) => (
            <SidebarItems key={child.id} item={child} />
          ))}
        </ul>
      )}

     
    </li>
  );
};

export default SidebarItems;
