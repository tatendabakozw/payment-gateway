/* eslint-disable react/no-unescaped-entities */
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import DocumentationLayout from '../../layouts/DocumentationLayout';
import DisplayCodeBlock from '../../components/code-block/CodeBlock';

function Quickstart() {
  const codeItems = [
    {
      _id: 'javascript',
      code: `// Install the Protocol JavaScript SDK
npm install @example/protocol-api --save `,
    },
    {
      _id: 'python',
      code: `# Install the Protocol Python SDK
pip install protocol_api`,
    },
    {
      _id: 'curl',
      code: `# cURL is most likely already installed on your machine
curl --version`,
    },
    {
      _id: 'php',
      code: `# Install the Protocol PHP SDK
composer require protocol/sdk`,
    },
  ];

  const transactionaItems = [
    {
      _id: 'python',
      code: `from transactions_api import ApiClient
client = ApiClient(token)
client.transactions.list()`,
    },
    {
      _id: 'javascript',
      code: `import ApiClient from '@example/gateway-api'
const client = new ApiClient(token)
await client.transactions.list()`,
    },
    {
      _id: 'curl',
      code: `# cURL is most likely already installed on your machine
curl --version`,
    },
    {
      _id: 'php',
      code: `# Install the Protocol PHP SDK
composer require protocol/sdk`,
    },
  ];
  return (
    <DocumentationLayout
      title="Quickstart"
      description="Quickstart your journey to our gateway"
    >
      <div className="min-h-screen">
        <div className="flex max-w-7xl mx-auto w-full space-y-6 flex-col  px-4 py-16">
          <p className="text-3xl heading-text font-semibold">Quickstart</p>
          <p className="main-text max-w-3xl text-lg">
            This guide will get you all set up and ready to use the Protocol
            API. We'll cover how to get started using one of our API clients and
            how to make your first API request. We'll also look at where to go
            next to find all the information you need to take full advantage of
            our powerful REST API.
          </p>
          <div className="flex bg-secondary-superlight dark:bg-secondary-superdark max-w-3xl border border-secondary-dark p-4 rounded-2xl flex-row space-x-4">
            <InformationCircleIcon
              height={32}
              width={32}
              className="text-green-600"
            />
            <p className="text-secondary-superdark dark:text-secondary-original">
              Before you can make requests to the Protocol API, you will need to
              grab your API key from your dashboard. You find it under{' '}
              <span className="text-secondary-dark dark:text-secondary-superlight font-semibold cursor-pointer ">
                Settings {'>'} API
              </span>
            </p>
          </div>
          <p className="z-10 heading-small pt-8">Check your client</p>
          <p className="main-text max-w-3xl">
            Before making your first API request, you need to pick which API
            client you will use. In addition to good ol' cURL HTTP requests,
            Gateway offers clients for JavaScript, Python, and PHP. In the
            following example, you can see how to install each client.
          </p>
          <div className="flex max-w-3xl">
            <DisplayCodeBlock codeItems={codeItems} />
          </div>
          <p className="z-10 heading-small pt-8">
            Making your first API request
          </p>
          <p className="main-text max-w-3xl">
            After picking your preferred client, you are ready to make your
            first call to the Gateway API. Below, you can see how to send a GET
            request to the Transactions endpoint to get a list of all your
            transactions. In the cURL example, results are limited to ten
            transactions, the default page length for each client.
          </p>
          <div className="flex max-w-3xl">
            {/* <DisplayCodeBlock showLineNumbers={true} codeItems={transactionaItems} /> */}
          </div>
        </div>
      </div>
    </DocumentationLayout>
  );
}

export default Quickstart;
