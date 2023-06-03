import HeroSection from '../components/page-sections/home-page/HeroSection';
import HomeInfoTile from '../components/tiles/HomeInfoTile';
import GeneralLayout from '../layouts/GeneralLayout';
import secure_icon from '../public/icons/secure.svg';
import documentation_icon from '../public/icons/document.svg';
import exchange_icon from '../public/icons/exchange.svg';
import colleborate_icon from '../public/icons/collaborate.svg';
import ServicesSection from '../components/page-sections/home-page/ServicesSection';
import OperationsSection from '../components/page-sections/home-page/OperationsSection';
import './index.module.css';
import ExploreSolutionsSection from '../components/page-sections/home-page/ExploreSolutionsSection';
import TestimonialsSection from '../components/page-sections/home-page/TestimonialsSection';

export function Index() {
  const tiles_info = [
    {
      icon: secure_icon,
      heading: 'secure transact',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint voluptatem dicta laudantium',
    },
    {
      icon: documentation_icon,
      heading: 'clear documentation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint voluptatem dicta laudantium',
    },
    {
      icon: exchange_icon,
      heading: 'quick exchange',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint voluptatem dicta laudantium',
    },
    {
      icon: colleborate_icon,
      heading: 'collaborate',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint voluptatem dicta laudantium',
    },
  ];
  return (
    <GeneralLayout
      title="Home Page"
      description="iam a description of homepage of gateway"
    >
      <HeroSection />
      <div className="grid md:grid-cols-4 grid-cols-1 md:gap-16 gap-4 max-w-7xl mx-auto w-full px-2">
        {tiles_info?.map((tile, index) => (
          <HomeInfoTile
            key={index}
            icon={tile.icon}
            heading={tile.heading}
            description={tile.description}
          />
        ))}
      </div>
      <ServicesSection />
      <OperationsSection />
      <ExploreSolutionsSection />
      <TestimonialsSection />
      <div className="flex w-full py-32 bg-slate-100">
        <div className="max-w-2xl bg-white w-full mx-auto rounded-3xl items-center p-8 shadow flex flex-col space-y-8">
          <p className='text-4xl font-semibold'>We’d love to help you grow.</p>
          <p className='text-slate-500'>Contact us today to discuss the best payments solution for your needs.</p>
          <div className="flex">
          <p className='bg-primary-superdark py-2 px-6 rounded-full text-white uppercase text-lg font-semibold'>lets talk</p>
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Index;
