export const data = {
  original_title: 'Gateway',
  site_description:
    "Zimbabwe's leading online store. Fast, reliable delivery to your door. Many ways to pay. Shop anything online: TV's, laptops cellphones, home appliances, and many more",
  site_url: 'https://www.trolliey.com',
  site_top_message: 'Free delivery on first order',

  OG_IMAGE: '',
  sidebar_pages: [
    {
      name: 'Introduction',
      location: '/',
      sections: [
        { name: 'Guides', location: 'guides' },
        { name: 'Resources', location: 'resources' },
      ],
      _id: '/intro',
    },
    {
      name: 'Quickstart',
      location: '/quickstart',
      sections: [
        { name: 'Choose your client', location: 'choose-your-client' },
        { name: 'First API request', location: 'first-api-request' },
        { name: 'Whats next', location: 'whats-next' },
      ],
      _id: 'quickstart',
    },
    {
      name: 'SDKs',
      location: '/sdks',
      sections: [
        { name: 'Official libraries', location: 'official-libraries' },
      ],
      _id: 'sdks',
    },
    {
      name: 'Authentication',
      location: '/authentication',
      sections: [
        { name: 'Basic authentication', location: 'basic-authentication' },
        { name: 'OAuth2 with bearer token', location: 'oauth2-with-bearer' },
        { name: 'Using an SDK', location: 'using-an-sdk' },
      ],
      _id: 'authentication',
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
      _id: 'webhooks',
    },
    {
      name: 'Payment methods',
      location: '/payment-methods',
      sections: [
        { name: 'Payment methods', location: 'payment-methods' },
        { name: 'Bank accounts', location: 'bank-accounts' },
        { name: 'Cards', location: 'cards' },
        { name: 'Sources', location: 'sources' },
      ],
      _id: 'payment-methods',
    },
  ],
  supported_languages:[
    {name: 'Javascript', _id: 'javascript'},
    {name: 'Python', _id: 'python'},
    {name: 'PHP', _id: 'php'},
    {name: 'cURL', _id: 'curl'},

  ]
};
