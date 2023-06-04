import DocumentationLayout from '../layouts/DocumentationLayout';
import useScrollHeight from '../hooks/useScrollHeight';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import ArrowLink from '../components/buttons/ArrowLink';
import GuidesItem from '../components/guides-item/GuidesItem';

export function Index() {
  const height = useScrollHeight();
  // console.log(height)
  return (
    <DocumentationLayout
      title="Documentation"
      description="Official documenation for the payment gateway"
      scrollheight={height}
    >
      <div className="z-10 flex  main-text relative overflow-hidden min-h-screen">
        <div className="z-0 absolute top-20 left-24 md:w-96 w-60 md:h-96 h-60 bg-primary-superlight dark:bg-primary-dark rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob" />
        <div className="z-0 absolute top-32 right-52 md:w-96 w-60 md:h-96 h-60 bg-secondary-superlight dark:bg-secondary-dark rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="z-0 absolute top-8 right-96 md:w-96 w-60 md:h-96 h-60 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-4000" />
        <div className="limit-width py-16 px-2 flex flex-col space-y-4">
          <p className="z-10 heading-text font-bold text-3xl">
            API Documentation
          </p>
          <p className="z-10 main-text max-w-3xl">
            Use the Protocol API to access contacts, conversations, group
            messages, and more and seamlessly integrate your product into the
            workflows of dozens of devoted Protocol users.
          </p>
          <div className="flex flex-row items-center space-x-2 py-8">
            <Link
              href="/quickstart"
              className="rounded-full flex-row flex items-center link-button space-x-2 px-3 py-2 text-sm"
            >
              <p>Quickstart</p>
              <ArrowSmallRightIcon height={16} width={16} />
            </Link>
            <div className="z-10 bg-secondary flex px-3 py-2 text-sm main-border main-link-text rounded-full">
              Explore SDKs
            </div>
          </div>
          <p className="z-10 heading-text font-bold text-lg pt-8">
            Getting Started
          </p>
          <p className="main-text max-w-3xl z-10 pb-8">
            To get started, create a new application in your{' '}
            <span className="light-link-text font-semibold">
              developer settings
            </span>
            , then read about how to make requests for the resources you need to
            access using our HTTP APIs or dedicated client SDKs. When your
            integration is ready to go live, publish it to our{' '}
            <span className="light-link-text font-semibold">
              integrations directory
            </span>{' '}
            to reach the Protocol community.
          </p>
          <ArrowLink text="Get your API key" location="#" />
          <p className="z-10 heading-text font-bold text-lg pt-8 pb-8">
            Guides
          </p>
          <div className="flex flex-col main-border-t pt-8">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
              <GuidesItem
                heading="Authentication"
                description="Learn how to authenticate your API requests."
              />
              <GuidesItem
                heading="Pagination"
                description="Understand how to work with paginated responses."
              />
              <GuidesItem
                heading="Errors"
                description="Read about the different types of errors returned by the API."
              />
              <GuidesItem
                heading="Webhooks"
                description="Learn how to programmatically configure webhooks for your app."
              />
            </div>
          </div>
        </div>
      </div>
    </DocumentationLayout>
  );
}

export default Index;
