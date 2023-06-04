/* eslint-disable @typescript-eslint/ban-types */
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import cards from '../../../public/cards.svg';
import React from 'react';

type Props = {};

const OperationsSection = (props: Props) => {
  return (
    <div className="w-full min-h-screen grid items-center content-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 grid-cols-1 px-2 gap-16 items-center">
        <div className="col-span-1 flex flex-col space-y-6">
          <div className="flex pt-8">
            <p className="text-xs p-2 rounded-lg bg-secondary-superlight text-secondary-superdark">
              Finance & operations
            </p>
          </div>
          <p className="font-semibold text-slate-700 text-xl">
            Take full control of your funds
          </p>
          <p className="text-lg text-slate-700">
            Optimize your finances and increase automation with our banking
            infrastructure. Especially valuable for platforms and marketplaces
            looking to payout users faster in a preferred currency.
          </p>
          <p className="text-slate-900 font-semibold pt-8 text-sm">
            Generate your own physical or virtual payment cards to send funds
            instantly and manage spending.
          </p>
          <div className="flex flex-row items-center text-secondary-original font-bold">
            <p>Get Started</p>
            <ChevronRightIcon height={20} width={20} />
          </div>
        </div>
        <div className="relative col-span-1">
          <div className="z-0 absolute top-0 -left-4 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-50  mix-blend-multiply animate-blob" />
          <div className="z-0 absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-50  mix-blend-multiply animate-blob animation-delay-2000" />
          <div className="z-0 absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
          <Image src={cards} className="object-contain z-10" alt="cards rep" />
        </div>
      </div>
    </div>
  );
};

export default OperationsSection;
