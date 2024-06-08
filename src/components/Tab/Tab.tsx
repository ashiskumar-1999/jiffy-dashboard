import React, { useEffect } from "react";
import { useTab } from "./TabContext";

interface TabProps {
  tabs: string[];
  defaultTab?: number;
  onTabSelect?: (index: number) => void;
}

const Tab: React.FC<TabProps> = ({ tabs, defaultTab = 0, onTabSelect }) => {
  const { activeTab, switchTab } = useTab();

  useEffect(() => {
    switchTab(defaultTab);
    if (onTabSelect) {
      onTabSelect(defaultTab);
    }
  }, [defaultTab, onTabSelect, switchTab]);

  const handleClick = (index: number) => {
    switchTab(index);
    if (onTabSelect) {
      onTabSelect(index);
    }
  };

  return (
    <div className="flex flex-wrap flex-row justify-normal gap-2 ">
      {tabs.map((label, index) => (
        <button
          key={index}
          className={`${
            activeTab === index
              ? "border-b-2 border-indigo-500 text-gray-800"
              : " text-gray-600"
          } text-lg px-4 py-1`}
          onClick={() => handleClick(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tab;
