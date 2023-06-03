/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import ThemeToggler from '../buttons/ThemeToggler';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-16 sticky top-0 main-border-b flex flex-row items-center justify-between px-4 bg-primary">
      <div className="flex flex-row text-slate-500 space-x-4 items-center main-border rounded-full bg-secondary px-4 py-2">
        <MagnifyingGlassIcon height={16} width={16} />
        <p className="text-sm w-56 ">Find something...</p>
        <p className="text-xs font-semibold">Ctrl K</p>
      </div>
      <div className="flex-1" />
      <div className="flex flex-row items-center space-x-4  text-sm">
        <p className='main-link-text'>API</p>
        <p className='main-link-text'>Documentation</p>
        <p className='main-link-text'>Support</p>
        <div className="main-border-r h-6" />
        <ThemeToggler />
        <div className="flex border border-primary-light bg-primary-superdark text-primary-light px-4 py-1 text-sm rounded-full font-semibold">Sign in</div>
      </div>
    </div>
  );
};

export default Navbar;
