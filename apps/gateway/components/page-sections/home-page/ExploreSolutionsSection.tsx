/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from 'react';
import clear_payment from '../../../public/clearpayment.jpg';
import online_payment from '../../../public/onlinepayment.jpg';
import projectmanager from '../../../public/projectmanager.jpg'
import ExploreSolutionComponent from '../../explore-solution/ExploreSolutionComponent';

type Props = {};

const ExploreSolutionsSection = (props: Props) => {
  const [selected_option, setSelectedOption] = useState('custom-payments');
  const nav_options = [
    { name: 'Custom Payments', _id: 'custom-payments' },
    { name: 'Simple Payments', _id: 'simple-payments' },
    { name: 'Payment Facilitator', _id: 'payment-facilitator' },
  ];

  return (
    <div className="flex w-full bg-slate-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto w-full px-2">
        <p className="text-slate-900 pb-12 font-semibold text-3xl">
          Explore our solutions
        </p>
        <div className="grid md:grid-cols-6 grid-cols-3 md:gap-4 gap-2 text-slate-700 border-b border-slate-500 w-full mb-16">
          {nav_options?.map((item, index) => (
            <div
              onClick={() => setSelectedOption(item._id)}
              key={item._id}
              className={`${
                item._id === selected_option
                  ? 'border-b-4 border-secondary-original '
                  : ' '
              } text-center cursor-pointer py-6 col-span-1`}
            >
              {item.name}
            </div>
          ))}
        </div>
        {selected_option === 'custom-payments' && (
          <ExploreSolutionComponent
            heading="Customize the payments experience"
            sub_heading="Clear"
            details="Create an end-to-end user experience without the overhead. We’ll
              manage risk, compliance and payouts, and keep you informed through
              our API."
            picture={clear_payment}
          />
        )}
        {selected_option === 'simple-payments' && (
          <ExploreSolutionComponent
            heading="Process payments quickly and easily"
            sub_heading="Link"
            details="Enable merchants to open an account instantly and accept payments immediately, allowing their customers to checkout directly on your platform."
            picture={online_payment}
          />
        )}
        {selected_option === 'payment-facilitator' && (
          <ExploreSolutionComponent
            heading="Become a payment facilitator"
            sub_heading="Core"
            details="Support an array of payment methods and use cases, and enable fast and flexible payouts while offsetting processing fees by integrating with Our core infrastructure."
            picture={projectmanager}
          />
        )}
      </div>
    </div>
  );
};

export default ExploreSolutionsSection;
