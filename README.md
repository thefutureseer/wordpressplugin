# wordpressplugin

my-plugin/
├── admin/
│   ├── my-plugin-admin.js (defines the admin console.)
│   └── my-plugin-admin-style.css
├── includes/ (the helper functions)
│   ├── my-plugin-functions.js 
│   └── my-plugin-template-tags.js (defines the template tags that are used by the plugin)
├── public/
│   ├── my-plugin-public.js (contains code that interacts with the DOM)
│   └── my-plugin-public-style.css
├── templates/
│   ├── my-plugin-template.hbs
│   └── my-plugin-template-2.hbs
├── index.js (express server)
├── package.json
├── README.md
└── LICENSE
