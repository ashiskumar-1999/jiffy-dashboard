import React from "react";

type filterProps = {
  label?: string;
  currentOption?: string;
};
const Filter = ({ label, currentOption }: filterProps) => {
  return (
    <select
      id="filter"
      className="block w-[9.5rem] h-[2.12rem] p-2 bg-white text-sm font-medium text-indigo-500 bg-white border rounded "
    >
      <option>All</option>
      <option value={currentOption}>Front-end</option>
      {/* <option className="p-3 text-sm font-medium text-sky-500">
        Front-end
      </option>
      <option className="p-3 text-sm font-medium text-sky-500">Back-end</option>
      <option className="p-3 text-sm font-medium text-sky-500">
        BlockChain
        </option> */}
    </select>
  );
};

export default Filter;
