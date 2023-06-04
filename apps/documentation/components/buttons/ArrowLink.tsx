/* eslint-disable @typescript-eslint/ban-types */
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

type Props = {
    location:string,
    text: string
};

const ArrowLink = (props: Props) => {
  return (
    <Link
      href={props.location}
      className=" flex-row flex items-center light-link-text space-x-2 text-sm font-semibold"
    >
      <p>{props.text}</p>
      <ArrowSmallRightIcon height={16} width={16} />
    </Link>
  );
};

export default ArrowLink;
