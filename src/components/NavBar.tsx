import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

const NavBar = () => {
  return (
    <div className="flex gap-8 items-center px-20 py-6">
      <Image src="/icon.svg" width={194} height={36} alt="jiffyScan" />
      <p className="text-base font-normal text-gray-500">Home</p>
      <div className="flex items-center">
        <p className=" text-base font-normal  text-gray-500">BlockChain</p>
        <Image src="/arrow.svg" width={24} height={24} alt="arrow" />
      </div>
      <div className="flex items-center">
        <p className=" text-base font-normal  text-gray-500">Developers</p>
        <Image src="/arrow.svg" width={24} height={24} alt="arrow" />
      </div>
      <div className="flex items-center">
        <p className=" text-base font-normal  text-gray-500">More</p>
        <Image src="/arrow.svg" width={24} height={24} alt="arrow" />
      </div>
      <p className=" text-base font-normal  text-gray-500">About 4337</p>
      <SearchBar />
      <Profile />
    </div>
  );
};

export default NavBar;
