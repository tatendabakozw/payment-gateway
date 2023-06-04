/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

type Props = {
  page_progress?: any;
};

const ScrollIndicator = (props: Props) => {
  return (
    <div className="relative w-[1px] bg-gray-200 dark:bg-gray-700 h-auto">
      <div className="absolute h-6 bg-blue-700 w-1 rounded-full -left-[2px] bottom-0" style={{top: props.page_progress+"px"}}></div>
    </div>
  );
};

export default ScrollIndicator;
