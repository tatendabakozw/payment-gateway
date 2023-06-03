/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import Image from 'next/image';
import React from 'react';

type Props = {
    icon:any,
    heading: string,
    description: string
};

const HomeInfoTile = (props: Props) => {
  return (
    <div className="z-10 flex flex-col p-4 rounded border space-y-6 items-center border-slate-100">
      <div className="h-8 w-8 relative">
        <Image src={props.icon} layout="fill" alt="" />
      </div>
      <p className="uppercase text-secondary-dark font-bold">{props.heading}</p>
      <p className="text-center text-slate-400">
        {props.description}
      </p>
    </div>
  );
};

export default HomeInfoTile;
