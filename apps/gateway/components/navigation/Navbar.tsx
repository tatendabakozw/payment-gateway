/* eslint-disable @typescript-eslint/ban-types */
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  nav_bg?: String;
};

const Navbar = (props: Props) => {
  const router = useRouter();
  const { pathname } = router;

  console.log(pathname);
  const nav_options = [
    { title: 'About', link: '/about' },
    { title: 'Documentation', link: 'https://payme-docs.vercel.app/' },
    { title: 'Pricing', link: '/pricing' },
    { title: 'Contact', link: '/contact' },
  ];
  return (
    <div
      className={`${
        props.nav_bg ? props.nav_bg : 'bg-white '
      } grid grid-cols-4 w-full h-16 justify-between items-center max-w-7xl mx-auto px-4`}
    >
      <Link
        href={'/'}
        className="col-span-1 logo text-sm font-semibold text-slate-700"
      >
        LOGO
      </Link>
      <div className="col-span-2 md:flex hidden flex-row items-center space-x-16 font-semibold text-sm text-slate-700">
        {nav_options.map((option, index) => (
          <Link
            key={index}
            className={`${
              pathname === option.link ? 'font-bold text-slate-900 ' : ' '
            }`}
            href={option.link}
          >
            {option.title}
          </Link>
        ))}
      </div>
      <div className="col-span-1 md:flex hidden flex-row items-center space-x-4">
        <Link
          href={'/login'}
          className="flex cursor-pointer text-primary-original border rounded px-8 py-2 text-sm font-semibold border-primary-original"
        >
          Login
        </Link>
        <div className="flex cursor-pointer bg-primary-original text-white px-8 py-2 rounded text-sm font-semibold">
          Sign Up
        </div>
      </div>
      <div className="md:hidden col-span-3 flex ml-auto ">
        <Bars3BottomRightIcon height={20} width={20} />
      </div>
    </div>
  );
};

export default Navbar;
