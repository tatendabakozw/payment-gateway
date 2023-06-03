/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import ArrowLinkButton from '../../buttons/ArrowLinkButton';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atelierCaveDark,
  dracula,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = {};

const ServicesSection = (props: Props) => {
  const codeString = `    const gatewayUrl = 'https://www.gateway.com/api/payments';
    const apiKey = 'pk_sdKyasdIUad87w23hjhh_kj_oi';
    var response;

    const items=[{
        name: 'shirt',
        quanity: 1,
        price: 200
  }]
    
    const createPaymentIntent = async () => {
        response = await axios.post(gatewayUrl,{body: items},{
            headers:{
                Authorization: 'Bearer ' + apiKey
            }
        })
  }`;
  return (
    <div className="w-full bg-primary-superdark mt-32">
      <footer className="relative bg-primary-superdark pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: '80px' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-primary-superdark fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto items-center justify-center content-center w-full pt-16 pb-32 text-white px-2 grid md:grid-cols-2 grid-cols-1 gap-16">
            <div className="col-span-1 flex flex-col space-y-8">
              <p className="text-secondary-original font-semibold text-lg">
                Made for developers by developers
              </p>
              <p className="text-white text-4xl font-semibold">
                Ship more quickly with powerful and easy-to-use APIs
              </p>
              <p className="text-slate-300 text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae sed nam tempore quod est assumenda dignissimos
                nostrum, unde officia obcaecati accusantium consequatur dolore
                consectetur ea! Blanditiis voluptatibus facere provident
                facilis.
              </p>
              <div className="flex">
                <ArrowLinkButton text={'How to use?'} />
              </div>
            </div>
            <div className="col-span-1 w-full flex flex-nowrap  overflow-auto">
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers="true"
                customStyle={{
                  borderRadius: '5px',
                  backgroundColor: '#21323e',
                }}
              >
                {codeString}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesSection;
