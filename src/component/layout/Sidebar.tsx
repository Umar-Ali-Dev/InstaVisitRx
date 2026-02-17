"use client";

import React, { useState } from "react";
import { 
  FaTh, 
  FaStethoscope, 
  FaUser, 
  FaUserMd, 
  FaCog, 
  FaGlobe,
  FaChevronDown,
  FaBell,
  FaCommentDots
} from "react-icons/fa";
import InstaGroupLogo from "../../assets/icons/InstaGroup.svg";

interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  hasDropdown?: boolean;
  isActive?: boolean;
}

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const menuItems: SidebarItem[] = [
    { label: "Dashboard", icon: <FaTh />, isActive: activeItem === "Dashboard" },
    { label: "Consultations", icon: <FaStethoscope />, isActive: activeItem === "Consultations" },
    { label: "Patients", icon: <FaUser />, isActive: activeItem === "Patients" },
    { label: "Providers", icon: <FaUserMd />, isActive: activeItem === "Providers" },
    { label: "Management", icon: <FaCog />, hasDropdown: true, isActive: activeItem === "Management" },
    { label: "Website", icon: <FaGlobe />, hasDropdown: true, isActive: activeItem === "Website" },
  ];

  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const handleItemClick = (label: string, hasDropdown?: boolean) => {
    if (hasDropdown) {
      toggleDropdown(label);
    } else {
      setActiveItem(label);
    }
  };

  return (
    <aside className="w-64 bg-white h-screen flex flex-col border-r border-gray-200">
      {/* Top Section with Logo and Dashboard text */}
      <div className="px-4 py-6 border-b border-gray-200">
        <div className="flex flex-col gap-3">
          <img 
            src={InstaGroupLogo} 
            alt="InstaGroup" 
            className="h-8 w-auto"
          />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {menuItems.map((item) => (
          <div key={item.label} className="relative">
            <button
              onClick={() => handleItemClick(item.label, item.hasDropdown)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors relative ${
                item.isActive
                  ? "bg-[#705295] text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
              {item.hasDropdown && (
                <FaChevronDown 
                  className={`transition-transform ${
                    openDropdowns.includes(item.label) ? "rotate-180" : ""
                  }`}
                />
              )}
              {/* Orange vertical line indicator for active item */}
              {item.isActive && (
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#F76D00] rounded-l"></div>
              )}
            </button>
            {/* Dropdown content would go here if needed */}
          </div>
        ))}
      </nav>

      {/* Bottom Icons */}
      <div className="px-4 py-6 border-t border-gray-200">
        <div className="flex items-center justify-center gap-4">
          {/* Bell icon with notification */}
          <div className="relative">
            <button className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200 transition-colors">
              <FaBell className="text-orange-600" size={20} />
            </button>
            <span className="absolute top-0 right-0 w-3 h-3 bg-orange-500 rounded-full border-2 border-white"></span>
          </div>

          {/* Chat icon */}
          <button className="w-12 h-12 rounded-full bg-[#705295] flex items-center justify-center hover:bg-[#5a4280] transition-colors">
            <FaCommentDots className="text-white" size={20} />
          </button>

          {/* Profile picture */}
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
            <img 
              src="https://via.placeholder.com/48" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
