/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, ReactElement, ReactNode } from 'react';
import Navbar from '../components/navigation/Navbar';
import Sidebar from '../components/navigation/Sidebar';
import Footer from '../components/navigation/Footer';
import Head from 'next/head';
import { data } from '../utils/data';

type Props = {
  title: string;
  description: string;
  icon?: any;
  children?: ReactNode;
  no_text?: any;
  twitter_title?: string;
  twitter_description?: string;
  canonical_url?: string;
  og_image?: any;
  bg_color?: string;
  component_above_navbar?: any;
  nav_bg?: string;
  og_url?: string;
  scrollheight?:number
};

const DocumentationLayout: FC<Props> = ({
  children,
  no_text,
  title,
  description,
  twitter_title,
  twitter_description,
  canonical_url,
  og_image,
  og_url,
  bg_color,
  component_above_navbar,
  nav_bg,
  scrollheight
}: Props): ReactElement => {
  return (
    <>
    <Head>
        <title>
          {title ? `${data.original_title} | ${title}   ` : data.original_title}
        </title>
        <meta
          name="description"
          content={
            description
              ? description.replace(/<[^>]*>?/gm, '')
              : data.site_description
          }
        />

        {/* // facebook and whatapp meta tags */}
        <meta property="og:type" content="website" />
        <meta
          name="og:title"
          property="og:title"
          content={title ? `${title} | Trolliey` : data.original_title}
        />
        <meta
          name="og:description"
          property="og:description"
          content={
            description
              ? description.replace(/<[^>]*>?/gm, '')
              : data.site_description
          }
        />
        <meta property="og:site_name" content={data.site_url} />
        <meta property="og:url" content={`${data.site_url}/${og_url}`} />
        <meta
          property="og:image"
          content={og_image ? og_image : '/images/icon.png'}
        />
        <meta
          property="og:image:alt"
          content="Product and site representation on link"
        />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />

        {/* // twitter tags */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={
            twitter_title
              ? `${twitter_title} | Trolliey`
              : 'Trolliey | Buy and sell items online'
          }
        />
        <meta
          name="twitter:description"
          content={twitter_description?.replace(/<[^>]*>?/gm, '')}
        />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta
          name="twitter:image"
          content={og_image ? og_image : data.OG_IMAGE}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="cn_CN" />

        <link rel="icon" type="image/png" href="/images/icon.png" />
        <link rel="shortcut icon" type="image/png" href="/images/icon.png" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="canonical" href={`${data.site_url}/${og_url}`} />
      </Head>
    <div className="flex flex-row sticky antialiased">
      <div className="sidebar h-screen sticky top-0 w-2/12">
        <Sidebar scrollheight={scrollheight} />
      </div>
      <div className="flex flex-1 flex-col">
        
        <div className="sticky top-0">
          <Navbar />
        </div>
        <div className="max-w-7xl w-full mx-auto flex-1 min-h-screen ">{children}</div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
    </>
  );
};

export default DocumentationLayout;
