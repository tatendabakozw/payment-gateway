/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

type Props = {
  className: string;
};

const GradientBackground = ({ className }: Props) => {
  return (
    <div
      className={`absolute top-0 left-0 z-0 w-full min-h-screen blur-3xl bg-blue-400 ${className}`}
    />
  );
};

export default GradientBackground;
