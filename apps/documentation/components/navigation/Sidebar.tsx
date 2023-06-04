/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';
import { useTheme } from 'next-themes';
import { data } from '../../utils/data';
import { useRouter } from 'next/router';
import { getItemPosition } from '../../helpers/arrayMethods';

type Props = {
  scrollheight?: number;
};

const Sidebar = (props: Props) => {
  const { theme } = useTheme();
  const [page_index, setPageIndex] = useState<number>();

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setPageIndex(
      pathname === '/'
        ? 0
        : getItemPosition(data.sidebar_pages, pathname.replace('/', ''))
    );
  }, [pathname]);

  if (page_index === undefined) {
    return <div className="flex"></div>;
  }

  return (
    <div className="w-full flex-1 flex flex-col space-y-2 md:min-h-screen md:main-border-r md:p-4 p-0">
      <p className="heading-text md:flex hidden font-bold text-lg pb-8">Gateway</p>
      <p className="heading-text font-bold heading-text text-sm">Guides</p>
      <Accordion defaultIndex={[page_index]} borderColor="transparent" mt={0}>
        {data.sidebar_pages.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionButton
              rounded={'md'}
              _expanded={{
                bg: theme === 'dark' ? '#1e293b ' : '#f8fafc ',
                color: theme === 'dark' ? '#e2e8f0 ' : '#334155 ',
                fontWeight: 'semibold',
              }}
              textColor={theme === 'dark' ? '#94a3b8 ' : '#334155 '}
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
