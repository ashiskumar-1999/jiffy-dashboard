import React, { useState, useRef } from "react";
import Image from "next/image";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profileDropdownRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button
        id="profile-menu"
        className=" flex gap-3 px-4 py-3"
        onClick={isOpen ? handleClose : handleOpen}
      >
        <Image src="avatar.svg" width={40} height={40} alt="profile-avatar" />
        <p className="text-sm font-semibold text-left">
          Olivia Rhye &nbsp;
          <p className="text-sm font-normal text-slate-500">
            olivia@jiffyscan.xyz
          </p>
        </p>
      </button>
      {/* Need position fixing*/}
      {isOpen && (
        <div className="flex flex-col items-start gap-3 px-4 py-2.5 border rounded-lg">
          <div className="flex items-center gap-3">
            <Image src="/user.svg" width={16} height={16} alt="user" />
            <p className="text-sm font-medium text-slate-500">View Profile</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/dashboard.svg" width={16} height={16} alt="user" />
            <p className="text-sm font-medium text-slate-500">Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/code.svg" width={16} height={16} alt="user" />
            <p className="text-sm font-medium text-slate-500">API</p>
          </div>
          {/*  <div className="border-t-2 border-gray-300" /> */}
          <div className="flex items-center gap-3">
            <Image src="/log-out.svg" width={16} height={16} alt="user" />
            <p className="text-sm font-medium text-slate-500">Log out</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
