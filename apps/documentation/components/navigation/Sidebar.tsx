/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import { useTheme } from 'next-themes';

type Props = {
  scrollheight?: number;
};

const Sidebar = (props: Props) => {
  const { theme } = useTheme();
  const sidebar_pages = [
    {
      name: 'Introduction',
      location: '/',
      sections: [
        { name: 'Guides', location: 'guides' },
        { name: 'Resources', location: 'resources' },
      ],
    },
    {
      name: 'Quickstart',
      location: '/quickstart',
      sections: [
        { name: 'Choose your client', location: 'choose-your-client' },
        { name: 'First API request', location: 'first-api-request' },
        { name: 'Whats next', location: 'whats-next' },
      ],
    },
    {
      name: 'SDKs',
      location: '/sdks',
      sections: [
        { name: 'Official libraries', location: 'official-libraries' },
      ],
    },
    {
      name: 'Authentication',
      location: '/authentication',
      sections: [
        { name: 'Basic authentication', location: 'basic-authentication' },
        { name: 'OAuth2 with bearer token', location: 'oauth2-with-bearer' },
        { name: 'Using an SDK', location: 'using-an-sdk' },
      ],
    },
    {
      name: 'Webhooks',
      location: '/webhooks',
      sections: [
        { name: 'Registering webhooks', location: 'registering-webhooks' },
        { name: 'Custom webhooks', location: 'custom-webhooks' },
        { name: 'Event types', location: 'event-types' },
        { name: 'Security', location: 'security' },
      ],
    },
  ];
  return (
    <div className="w-full flex-1 flex flex-col space-y-2 min-h-screen main-border-r p-4">
      <p className="heading-text font-bold text-lg pb-4">Gateway</p>
      <p className="heading-text font-bold heading-text text-sm">Guides</p>
      <Accordion borderColor="transparent" mt={0}>
        {sidebar_pages.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton
              rounded={'md'}
              _expanded={{
                bg: theme === 'dark' ? '#1e293b ' : '#f8fafc ',
                color: theme === "dark" ? '#e2e8f0 ' : '#334155 ',
                fontWeight: 'semibold',
              }}
              textColor={theme === "dark" ? '#94a3b8 ' : '#334155 '}
              _hover={{ bg: theme === 'dark' ? '#1e293b' : '#f8fafc ' }}
            >
              <div className="flex text-sm">{item.name}</div>
            </AccordionButton>
            <AccordionPanel>
              <div className="flex flex-col text-sm">
                {item.sections.map((item) => (
                  <div
                    className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 main-link-text"
                    key={item.location}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Sidebar;
