import React, { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card";
import { Tab, TabPanel } from "@/components/Tab";
import NavBar from "@/components/NavBar";
import Filter from "@/components/Filter";

const completedBountyData = [
  {
    id: "1",
    path: "/deribet.svg",
    companyName: "Deribet",
    title: "Create a Frame for Farcaster",
    bountyPrice: 500,
    position: "1st",
    partcipants: 20,
  },
  {
    id: "2",
    path: "/deanslistdao.svg",
    companyName: "Dean's List DAO",
    title: "Armada UI/UX Review",
    partcipants: 7,
  },
  {
    id: "3",
    path: "/superteam.svg",
    companyName: "Superteam",
    title: "Design Earn's talent Leaderboard",
    bountyPrice: 700,
    position: "1st",
    partcipants: 36,
  },
  {
    id: "4",
    path: "/pstakefinance.svg",
    companyName: "pSTAKE Finance",
    title: "Write a thread with memes for PP Program on Solana",
    bountyPrice: 100,
    position: "3st",
    partcipants: 12,
  },
];

const inReviewBountyData = [
  {
    id: "1",
    path: "/deanslistdao.svg",
    companyName: "Dean's List DAO",
    title: "Armada UI/UX Review",
    partcipants: 64,
  },
  {
    id: "2",
    path: "/deribet.svg",
    companyName: "Deribet",
    title: "Create a Frame for Farcaster",
    bountyPrice: 500,
    position: "1st",
    partcipants: 23,
  },
];

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = ["Completed", "InReview"];

  const handleTabSelect = useCallback((index: number) => {
    setCurrentTab(index);
  }, []);
  const memoizedTab = useMemo(
    () => <Tab tabs={tabs} defaultTab={0} onTabSelect={handleTabSelect} />,
    [tabs, handleTabSelect]
  );

  return (
    <>
      <NavBar />
      <div className="flex flex-col px-[11.25rem]">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <p className="text-xl font-semibold">Work History</p>
            <span className="h-8 border-l border-gray-300 m-3" />
            {memoizedTab}
          </div>
          <div className="flex items-center gap-4">
            <span className="h-8 border-l border-gray-300 m-3" />
            <Image src="/filter.svg" width={16} height={16} alt="filter" />
            <p className="text-sm font-normal text-gray-400">Filter By</p>
            <Filter />
          </div>
        </div>
        <div className="border-t-2 border-gray-300 pb-4 -mt-2" />
        <TabPanel>
          {completedBountyData.map((data) => (
            <Card
              key={data.id}
              path={data.path}
              companyName={data.companyName}
              title={data.title}
              bountyPrice={data.bountyPrice}
              position={data.position}
              participants={data.partcipants}
            />
          ))}
          {inReviewBountyData.map((data) => (
            <Card
              key={data.id}
              path={data.path}
              companyName={data.companyName}
              title={data.title}
              bountyPrice={data.bountyPrice}
              position={data.position}
              participants={data.partcipants}
            />
          ))}
        </TabPanel>
      </div>
    </>
  );
}
