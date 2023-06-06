import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import OverviewTile from '../components/tiles/OverviewTile';
import OverviewGraph from '../components/graphs/OverviewGraph';
import SaleItem from '../components/sale-item/SaleItem';

export function Index() {
  const [selected_option, setSelectedOption] = useState('overview');
  const overview_options = [
    { name: 'Overview', _id: 'overview' },
    { name: 'Analytics', _id: 'analytics' },
    { name: 'Reports', _id: 'reports' },
    { name: 'Notifications', _id: 'notifications' },
  ];
  return (
    <DashboardLayout>
      <div className="flex w-full max-w-7xl mx-auto text-main flex-col space-y-8 md:p-8 p-4 min-h-screen">
        <p className="heading-text text-3xl font-bold">Overview</p>
        <div className="flex">
          <div className="flex flex-row items-center p-1 rounded bg-secondary">
            {overview_options.map((item, index) => (
              <div
                onClick={() => setSelectedOption(item._id)}
                key={index}
                className={`${
                  selected_option === item._id
                    ? 'bg-primary font-semibold '
                    : ''
                } py-2 px-4 text-sm rounded main-link-text cursor-pointer `}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8">
          <OverviewTile />
          <OverviewTile />
          <OverviewTile />
          <OverviewTile />
        </div>
        <div className="grid grid-cols-5 gap-4 flex-1 h-96">
          <div className=" main-border col-span-3 p-4 rounded-lg">
            <p className="heading-small text-3xl font-bold pb-4">Overview</p>
            <div className="flex">
              <OverviewGraph />
            </div>
          </div>
          <div className=" main-border col-span-2 p-4 rounded-lg">
            <p className="heading-small text-3xl font-bold pb-1">Recent Sales</p>
            <p className='text-slate-400 dark:text-slate-500 text-sm font-semibold pb-4'>You made 265 sales this month</p>
           <div className="flex-col space-y-4">
            <SaleItem />
            <SaleItem />
            <SaleItem />
            <SaleItem />
            <SaleItem />
            <SaleItem />
           </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Index;
