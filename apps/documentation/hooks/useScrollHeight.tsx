/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';

const useScrollHeight = () => {
  //Width State
  const [width, setWidth] = useState(0);

  // scroll function
  const scrollHeight = () => {
    var el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight;
    var percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100;
    // store percentage in state
    setWidth(percent);
  };

  //useEffect to control the component lifecycle
  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  });
  return width;
};

export default useScrollHeight;
