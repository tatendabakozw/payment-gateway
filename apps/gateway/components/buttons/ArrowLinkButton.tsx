/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import {ChevronRightIcon} from '@heroicons/react/24/solid'

type Props = {
    text: String
};

const ArrowLinkButton = (props: Props) => {
  return (
    <a
      href="#_"
      className="relative inline-flex items-center px-12 py-1 overflow-hidden text-sm font-semibold text-secondary-original border-2 border-secondary-original rounded-full hover:text-slate-700 group hover:bg-secondary-original"
    >
      <span className="absolute left-0 block w-full h-0 transition-all bg-secondary-original opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <ChevronRightIcon height={20} width={20} />
      </span>
      <span className="relative">{props.text}</span>
    </a>
  );
};

export default ArrowLinkButton;
