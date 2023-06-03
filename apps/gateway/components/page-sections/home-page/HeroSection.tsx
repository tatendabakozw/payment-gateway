/* eslint-disable @typescript-eslint/ban-types */
import Image from 'next/image';
import React from 'react';
import underline from '../../../public/svgs/underline.svg';

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <main className="app min-h-screen w-full relative overflow-hidden">
      <div
        className="min-h-screen md:px-2 px-4 z-10 relative bg-none hero-section max-w-7xl mx-auto w-full grid items-center content-center justify-center">
        <div className="z-0 absolute top-40 -left-4 md:w-96 w-60 md:h-96 h-60 bg-yellow-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="z-0 absolute top-52 -right-52 md:w-96 w-60 md:h-96 h-60 bg-purple-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="z-0 absolute -bottom-8 left-20 md:w-96 w-60 md:h-96 h-60 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
        
        <p className="uppercase z-10 text-secondary-dark text-center text-sm font-semibold">
          payment processing in a neater way
        </p>
        <div className="z-10 relative w-full flex flex-col">
          <div className="relative">
            <div className=" before:absolute before:-top-20 before:-left-20 before:z-[20] before:content-arrow">
              <p className="text-5xl  text-primary-original pt-8 pb-4 font-bold text-center max-w-4xl mx-auto w-full">
                We provide you an architecture for your online payment
                processing.{' '}
              </p>
            </div>
          </div>
          <div className="absolute -bottom-10 md:right-28 right-10 z-0">
            <Image
              src={underline}
              alt="underline item"
              height={100}
              width={150}
            />
          </div>
        </div>
        <p className="text-center pt-10 max-w-3xl z-10 text-primary-original mx-auto w-full ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut itaque
          rerum nemo aspernatur harum illo esse consequuntur voluptates facere!
          Laudantium cumque eius quaerat nemo, provident voluptates explicabo
          laboriosam. Officiis, debitis.
        </p>
        <div className="flex flex-row items-center space-x-4 mx-auto pt-16">
          <div className="flex cursor-pointer bg-primary-original text-white md:px-8 px-4 py-2 rounded text-sm font-semibold">
            Get Started
          </div>
          <div className="flex cursor-pointer text-primary-original border rounded md:px-8 px-4 py-2 text-sm font-semibold border-primary-original">
            Join Our Community
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
