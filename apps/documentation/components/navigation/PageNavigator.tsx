/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect, useState } from 'react';
import ChangePageButton from '../buttons/ChangePageButton';
import { Page } from '../../utils/types';
import { useRouter } from 'next/router';
import { getNextItem, getPreviousItem } from '../../helpers/arrayMethods';
import { data } from '../../utils/data';

type Props = {};

const PageNavigator = (props: Props) => {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setPrevious(getPreviousItem(data.sidebar_pages, pathname));
    setNext(getNextItem(data.sidebar_pages, pathname));
  }, [pathname]);

  const [previous, setPrevious] = useState<Page>();
  const [next, setNext] = useState<Page>();
  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full">
      <div className="flex flex-row items-center space-x-6 py-16 px-4">
        <p className="main-text text-sm">Was this page helpful?</p>
        <div className="flex text-sm main-text">
          <div className="flex main-border rounded-l-full px-3 py-2">Yes</div>
          <div className="flex main-border rounded-r-full px-3 py-2">No</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-2">
        {previous ? (
          <ChangePageButton
            location="/"
            pageText={previous.name}
            position="left"
          />
        ) : (
          <div className="flex" />
        )}
        {next ? (
          <ChangePageButton
            location="/quickstart"
            pageText={next.name}
            position="right"
          />
        ) : (
          <div className="flex" />
        )}
      </div>
    </div>
  );
};

export default PageNavigator;
