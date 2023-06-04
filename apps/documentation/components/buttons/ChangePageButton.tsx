/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArrowSmallLeftIcon,
  ArrowSmallRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

type Props = {
  pageText: string;
  position: string;
  location?: string;
};

const ChangePageButton = (props: Props) => {
  return (
    <Link href={props.location} className="flex flex-col space-y-2">
      {props.position === 'left' ? (
        <ButtonItem
          icon={<ArrowSmallLeftIcon height={16} width={16} />}
          text="Previous"
        />
      ) : (
        <ButtonItem
          reverse
          icon={<ArrowSmallRightIcon height={16} width={16} />}
          text="Next"
        />
      )}
      <p className="heading-text font-bold text-lg">{props.pageText}</p>
    </Link>
  );
};

interface ButtonItemProps {
  icon: any;
  text: string;
  reverse?: boolean;
}

const ButtonItem = ({ icon, text, reverse }: ButtonItemProps) => {
  return (
    <div className="flex bg-secondary main-border px-3 py-2 rounded-full space-x-2 font-semibold text-sm main-link-text ">
      {reverse ? (
        <>
          <p>{text}</p>
          {icon}
        </>
      ) : (
        <>
          {icon}
          <p>{text}</p>
        </>
      )}
    </div>
  );
};

export default ChangePageButton;
