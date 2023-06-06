/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import ProjectsMenu from '../menus/ProjectsMenu';
import ThemeToggler from '../buttons/ThemeToggle';
import { Avatar } from '@chakra-ui/react';

type Props = {};

const Navbar = (props: Props) => {
  const nav_options = [
    { name: 'Overview', _id: 'overview' },
    { name: 'Customers', _id: 'customers' },
    { name: 'Products', _id: 'products' },
    { name: 'Settings', _id: 'settings' },
  ];
  return (
    <div className="w-full main-border-b">
      <div className="max-w-7xl w-full mx-auto px-4 flex flex-row items-center space-x-4 py-4 ">
        <ProjectsMenu />
        <div className="flex flex-row items-center space-x-4 text-sm font-semibold">
          {nav_options.map((item, index) => (
            <p key={index} className='main-link-text hover:font-semibold'>{item.name}</p>
          ))}
        </div>
        <div className="flex-1" />
        <ThemeToggler />
        <Avatar size={'xs'} name="username"/>
      </div>
    </div>
  );
};

export default Navbar;
