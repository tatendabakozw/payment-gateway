/* eslint-disable @typescript-eslint/ban-types */
import GeneralLayout from '../../layouts/GeneralLayout';
import React from 'react';

type Props = {};

const Contact = (props: Props) => {
  return (
    <GeneralLayout
      title="Contact"
      description="Get in touch with us"
    >
      <div className="min-h-screen relative ">
        <div className="z-0 absolute top-40 left-4 md:w-96 w-60 md:h-96 h-60 bg-yellow-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="z-0 absolute top-52 right-52 md:w-96 w-60 md:h-96 h-60 bg-purple-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="z-0 absolute bottom-8 left-20 md:w-96 w-60 md:h-96 h-60 bg-pink-200 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
        <div className="flex flex-col w-full py-16">
          <p className="max-w-xs text-center w-full mx-auto text-3xl font-semibold text-slate-900">
            Contact
          </p>
          <div className="border-b-4 border-secondary-original w-8 self-center mt-4" />
        </div>
        {/* top layer of abour us */}
      </div>
      <div className="max-w-7xl w-full mx-auto">
        {/* other stuff on about */}
      </div>
    </GeneralLayout>
  );
};

export default Contact;
