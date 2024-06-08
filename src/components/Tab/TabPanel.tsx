import React, { ReactNode } from "react";
import { useTab } from "./TabContext";
interface TabPanelProps {
  children: ReactNode[];
}
const TabPanel = ({ children }: TabPanelProps) => {
  const { activeTab } = useTab();

  return <div>{children[activeTab]}</div>;
};

export default TabPanel;
