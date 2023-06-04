/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Link from 'next/link';

type Props = {
  isOpen;
  onClose;
};

const MobileNavDrawer = (props: Props) => {
  return (
    <Drawer isOpen={props.isOpen} placement="left" onClose={props.onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody border={'none'} className="bg-primary " py={8}>
          <div className="flex flex-col space-y-2 pb-4 ">
            <p className="main-link-text flex">API</p>
            <p className="main-link-text flex">Documentation</p>
            <p className="main-link-text flex">Support</p>
          </div>
          <Sidebar scrollheight={0} />
          <div className="main-border-t my-8" />
          <Link
            href={'https://pay-me-pi.vercel.app/login'}
            className="flex bg-primary-original text-white px-4 py-1 text-sm  rounded-full font-semibold"
          >
            <p className="text-center w-full">Sign in</p>
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavDrawer;
