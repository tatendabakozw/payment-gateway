import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface AccordionProps {
  title: string;
  content?: any;
  showIcon?: boolean;
}

export default function CustomAccordion({
  title,
  content,
  showIcon,
}: AccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div className="shadow-sm cursor-pointer bg-white rounded-lg">
      <div
        onClick={toggleExpanded}
        className="px-6 text-left items-center h-20 select-none flex justify-between flex-row"
      >
        <h5 className="flex-1 text-slate-800 font-semibold">{title}</h5>
        {showIcon && (
          <div className="flex-none pl-2">
            {expanded ? (
              <div className="flex">
                <span className="bg-slate-200 p-2 rounded-full">
                  <ChevronUpIcon height={16} width={16} />
                </span>
              </div>
            ) : (
              <div className="flex">
                <span className="bg-slate-200 p-2 rounded-full">
                  <ChevronDownIcon height={16} width={16} />
                </span>
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`px-6 pt-0  overflow-hidden transition-[max-height] duration-200 ease-in ${
          expanded ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="pb-4 text-left">{content}</p>
      </div>
    </div>
  );
}
