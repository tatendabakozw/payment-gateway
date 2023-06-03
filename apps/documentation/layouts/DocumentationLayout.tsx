/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, ReactElement, ReactNode } from 'react';
import Navbar from '../components/navigation/Navbar';
import Sidebar from '../components/navigation/Sidebar';
import Footer from '../components/navigation/Footer';

type Props = {
  children?: ReactNode;
};

const DocumentationLayout: FC<Props> = (props: Props): ReactElement => {
  return (
    <div className="flex flex-row min-h-screen antialiased">
      <div className="sidebar w-2/12">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="">
          <Navbar />
        </div>
        <div className="flex-1">{props.children}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;
