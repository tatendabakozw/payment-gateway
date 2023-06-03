/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import bako from '../../../public/bako.jpg';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import cut_logo from '../../../public/cut_icon.png';

type Props = {};

const TestimonialsSection = (props: Props) => {
  return (
    <div className="relative md:py-20 py-12 w-full">
      <div className="flex flex-col w-full">
        <p className="max-w-xs text-center w-full mx-auto text-3xl font-semibold text-slate-900">
          An Experience People Love to Talk About
        </p>
        <div className="border-b-4 border-secondary-original w-8 self-center mt-4" />
      </div>
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-slate-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
              />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 h-full w-full">
                <div className="relative h-full w-full">
                  <Image className="object-contain" src={bako} alt="user rep" />
                </div>
              </div>

              <div className="relative px-8 text-white">
                <div></div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow"></div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 my-auto pt-8 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="flex flex-col">
            <FaQuoteLeft className="text-slate-400" size={48} />
            <p className="text-slate-500 pt-4 max-w-lg">
              Creating No Cost EMI offers through the Gateway dashboard was
              surprisingly easy and it has proved to be an important driver in
              making our subscriptions affordable to a wider audience. We saw a
              large increase of the EMI contribution in the overall sales,
              thereby unlocking a specific affordability sensitive segment for
              us.
            </p>
            <p className="text-slate-900 font-extrabold text-3xl py-4">
              Tatenda Bako
            </p>
            <p className="text-slate-900 font-semibold text-lg">
              Software Developer
            </p>
            <div className="flex flex-row items-center py-4">
              <Image
                className="object-contain"
                src={cut_logo}
                height={44}
                width={44}
                alt="user rep"
              />
              <p className="text-slate-700 font-semibold">
                Chinhoyi University of Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
