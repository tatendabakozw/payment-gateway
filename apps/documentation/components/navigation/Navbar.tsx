/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import ThemeToggler from '../buttons/ThemeToggler';
import Link from 'next/link';
import { useDisclosure } from '@chakra-ui/react';
import MobileNavDrawer from './MobileNavDrawer';

type Props = {};

const Navbar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="h-16 main-border-b flex flex-row items-center justify-between px-4 backdrop-blur-lg">
      <div
        onClick={onOpen}
        ref={btnRef}
        className="md:hidden flex heading-text"
      >
        <Bars3BottomLeftIcon height={20} width={20} />
      </div>
      <p className='md:hidden flex heading-text pl-4 text-lg font-bold'>Gateway</p>
      <div className="md:flex hidden flex-row text-slate-500 space-x-4 items-center main-border rounded-full bg-secondary px-4 py-2">
        <MagnifyingGlassIcon height={16} width={16} />
        <p className="text-sm w-56 ">Find something...</p>
        <p className="text-xs font-semibold">Ctrl K</p>
      </div>
      <div className="flex-1" />
      <div className="flex flex-row items-center space-x-4  text-sm">
        <p className="main-link-text md:flex hidden">API</p>
        <p className="main-link-text md:flex hidden">Documentation</p>
        <p className="main-link-text md:flex hidden">Support</p>
        <div className="main-border-r h-6" />
        <ThemeToggler />
        <Link
          href={'https://pay-me-pi.vercel.app/login'}
          className="md:flex hidden link-button px-4 py-1 text-sm rounded-full font-semibold"
        >
          Sign in
        </Link>
      </div>
      <>
        <MobileNavDrawer isOpen={isOpen} onClose={onClose} />
      </>
    </div>
  );
};

export default Navbar;
