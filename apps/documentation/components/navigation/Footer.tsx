/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="max-w-7xl w-full mx-auto main-border-t py-8 flex flex-row items-center justify-between px-4">
      <p className="text-xs main-text">
        © Copyright 2023. All rights reserved.
      </p>
      <div className="flex flex-row items-center space-x-4">
        <div className=" main-link-text">
          <FaFacebook size={16} />
        </div>
        <div className=" main-link-text">
          <FaInstagram size={16} />
        </div>
        <div className=" main-link-text">
          <FaTwitter size={16} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
