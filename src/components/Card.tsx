import React from "react";
import Image from "next/image";

type prop = {
  path: string;
  companyName: string;
  title: string;
  dateOfEvent?: Date;
  bountyPrice?: number;
  position?: string;
  participants?: number;
};

const Card = ({
  path,
  companyName,
  title,
  bountyPrice,
  participants,
  position,
  dateOfEvent,
}: prop) => {
  return (
    <div className="flex w-[67.5rem] h-[7.2rem] p-4 rounded-lg  hover:bg-[#EDF2F7] transition ease-in duration-300">
      <Image src={path} width={80} height={80} alt={companyName} />
      <div className="flex w-full p-6 justify-between items-center">
        <div>
          <p className="text-xl font-semibold text-neutral-900">
            {title}&nbsp;<span className="text-sm font-normal">by</span>
            &nbsp;
            <span className="text-slate-400">{companyName}</span>
          </p>
          <div className="flex items-center">
            {bountyPrice && position && (
              <>
                <Image src="/token.svg" width={24} height={24} alt="token" />
                <p className="ml-1 text-lg font-semibold">
                  {bountyPrice}&nbsp;
                  <span className="text-slate-400">USDC</span>
                </p>
                <span className="h-6 border-l border-gray-300 m-3" />
                <span className="text-gray-500 mr-1">🏆 {position} Place</span>
              </>
            )}
          </div>
        </div>
        <div>
          <p className="text-gray-500">04/04/2022</p>
          <p className="text-gray-500">{participants} participants</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
