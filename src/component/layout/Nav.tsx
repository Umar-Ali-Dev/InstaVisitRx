"use client";

import React from "react";
import { FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import profileLogo from "../../assets/icons/profile.jpg";
import envelopLogo from "../../assets/icons/envelop.svg";
import Heading from "../../component/ui/headings/Heading";

const Nav = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Heading title="Dashboard" textSize = "text-[20px]"/>

        </div>

        <div className="flex items-center gap-4">

          {/* Envelope icon */}
          <button className="hover:bg-gray-100 rounded-full transition-colors">
            <img 
              src={envelopLogo} 
              alt="envelop" 
              className="w-full h-full object-cover object-center"
            />
          </button>

          {/* Profile picture */}
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img 
              src={profileLogo} 
              alt="profile" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
