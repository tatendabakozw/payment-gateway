/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import ArrowLink from '../buttons/ArrowLink';

type Props = {
  heading: string;
  description: string;
};

const GuidesItem = (props: Props) => {
  return (
    <div className="flex flex-col space-y-2">
      <p className="heading-text font-bold">{props.heading}</p>
      <p className="main-text text-sm pb-4">{props.description}</p>
      <ArrowLink text="Read more" location="#" />
    </div>
  );
};

export default GuidesItem;
