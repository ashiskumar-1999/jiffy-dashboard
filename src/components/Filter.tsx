import React from "react";

type filterProps = {
  label?: string;
  currentOption?: string;
};
const Filter = ({ label, currentOption }: filterProps) => {
  return (
    <select
      id="filter"
      className="w-[9.5rem] h-[2.12rem] text-sm font-medium text-indigo-500 border rounded "
    >
      <option>All</option>
      <option value={currentOption}>Content</option>
      <option className="p-3 text-sm font-medium text-sky-500">
        Front-end
      </option>
      <option className="p-3 text-sm font-medium text-sky-500">Back-end</option>
      <option className="p-3 text-sm font-medium text-sky-500">
        BlockChain
      </option>
    </select>
  );
};

export default Filter;
