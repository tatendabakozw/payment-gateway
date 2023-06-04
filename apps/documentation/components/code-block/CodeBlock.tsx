/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { CheckIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { data } from '../../utils/data';
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { getFromArray } from '../../helpers/arrayMethods';
// import { CodeItemType } from '../../utils/types';

type Props = {
  codeItems: any;
  showLineNumbers?: boolean;
};

const DisplayCodeBlock = (props: Props) => {
  const [copy, setCopy] = useState(false);
  const [selected_language, setSelectedlanguage] = useState('javascript');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      getFromArray(props.codeItems, selected_language)?.code
    );
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  //   console.log(getFromArray(props.codeItems, selected_language))

  return (
    <div className="flex flex-col w-full bg-slate-800 main-border rounded-2xl overflow-hidden">
      <div className="flex text-white p-4 text-sm flex-row items-center justify-between">
        <div className="flex flex-row items-center text-slate-300">
          {data.supported_languages.map((item) => (
            <div
              onClick={() => setSelectedlanguage(item._id)}
              key={item._id}
              className={`${
                selected_language === item._id
                  ? 'text-secondary-light font-bold'
                  : ' '
              } hover:text-white px-2 cursor-pointer`}
            >
              {item.name}
            </div>
          ))}
        </div>
        {copy ? (
          <span className="py-1 flex flex-row items-center space-x-1 text-slate-300">
            <CheckIcon height={16} width={16} />
            <p className="md:flex hidden">Copied</p>
          </span>
        ) : (
          <span
            onClick={copyToClipboard}
            className="py-1 cursor-pointer flex flex-row items-center space-x-1 text-slate-300"
          >
            <ClipboardIcon height={16} width={16} />
            <p className="md:flex hidden">Copy code</p>
          </span>
        )}
      </div>
      <SyntaxHighlighter
        language={selected_language}
        style={atomOneDark}
        showLineNumbers={props.showLineNumbers}
        showInlineLineNumbers={true}
        lineProps={{
          style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
        }}
        codeTagProps={{ style: { fontFamily: 'Monaco, Menlo, Consolas, "Droid Sans Mono", "Inconsolata", "Courier New", monospace', fontSize: '0.9rem' } }}
        customStyle={{
          padding: '1.5rem',
          width: '100%',
          backgroundColor: '#020617',
        }}
        wrapLines={true}
      >
        {getFromArray(props.codeItems, selected_language)?.code}
        {/* {props.codeItems.code} */}
      </SyntaxHighlighter>
    </div>
  );
};

export default DisplayCodeBlock;
