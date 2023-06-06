/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type Props = {};

const CodeBlock = (props: Props) => {
  const code = `const gatewayUrl = 'https://www.gateway.com/api/payments';
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
    <div className="flex flex-col w-full bg-slate-800 main-border rounded-2xl overflow-hidden">
      <div className="fle">{/* other code can go here */}</div>
      <SyntaxHighlighter
        language={'javascript'}
        style={atomOneDark}
        showLineNumbers={true}
        showInlineLineNumbers={true}
        lineProps={{
          style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
        }}
        codeTagProps={{
          style: {
            fontFamily:
              'Monaco, Menlo, Consolas, "Droid Sans Mono", "Inconsolata", "Courier New", monospace',
            fontSize: '1rem',
          },
        }}
        customStyle={{
          padding: '1.5rem',
          width: '100%',
          backgroundColor: '#020617',
        }}
        wrapLines={true}
      >
        {code}
        {/* {props.codeItems.code} */}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
