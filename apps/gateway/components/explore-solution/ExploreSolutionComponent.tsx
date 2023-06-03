/* eslint-disable @typescript-eslint/ban-types */
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

type Props = {
  heading: string;
  sub_heading: string;
  details: string;
  picture: any;
};

const ExploreSolutionComponent = (props: Props) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
      <div className="flex flex-col space-y-6 max-w-xl">
        <p className="text-slate-900 text-2xl">{props.heading}</p>
        <div className="flex">
          <div className="flex flex-row items-center text-slate-600 font-semibold text-xs bg-white p-1 rounded-lg">
            {props.sub_heading}
          </div>
        </div>
        <p className="text-slate-700 max-w-lg text-lg">{props.details}</p>
        <div className="flex flex-row items-center text-secondary-original pt-4 font-bold">
          <p className="text-lg uppercase">Get Started</p>
          <ChevronRightIcon height={20} width={20} />
        </div>
      </div>
      <div className="col-span-1">
        <Image
          className="object-cover h-full w-full rounded-lg"
          src={props.picture}
          alt="clear payment"
        />
      </div>
    </div>
  );
};

export default ExploreSolutionComponent;
