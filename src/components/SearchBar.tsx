import React, { ChangeEvent, ClipboardEvent, useState } from "react";
import Image from "next/image";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handlePaste = (event: ClipboardEvent) => {
    const pasteData = event.clipboardData.getData("text");
    event.preventDefault();
    setInputValue(pasteData);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="flex items-center gap-4 w-[22.5rem] h-10 px-6 py-1 border-2 border-slate-300 rounded-full hover:border-blue-500">
      <div className="flex items-center gap-1.5">
        ⚡️
        <Image src="arrow.svg" width={24} height={24} alt="arrow" />
      </div>
      <span className="h-6 border-l border-gray-300 m-3" />
      <input
        placeholder="Search an UserOp"
        className="focus:outline-none"
        value={inputValue}
        /* onPaste={handlePaste} */
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
