// Note: Month = 0 = January

const EXPERIENCES = [
  {
    id: 1,
    title: 'Integrations Co-op',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2017, month: 0 },
    endDate: { year: 2017, month: 3 },
    description:
      'Migrated legacy code to Amazon Web Services (AWS), automated existing processes, and developed a new Kibana dashboard.',
    accomplishments: [
      'Managed the migration of a legacy Java application hosted on the on-premises data center to AWS',
      'Developed a dashboard in Kibana for monitoring ServiceNow tickets',
      'Built an automated data pipeline in Jenkins to facilitate the movement of data to AWS',
      'Automated multiple DevOps tasks in Jenkins',
    ],
    tags: ['Java', 'AWS', 'Jenkins'],
  },
  {
    id: 2,
    title: 'Wi-Fi Connected Appliances Co-op',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2017, month: 7 },
    endDate: { year: 2017, month: 11 },
    description:
      'Developed a new API that exposed appliance commands to third-party developers and implemented new voice commands for GE Smart Appliances.',
    accomplishments: [
      'Assisted in the development of new voice commands for Alexa and Google Home platforms',
      'Developed an API to connect third-party developers to send commands to smart appliances',
      'Created a prototype voice application using Google Direct Actions',
      'Wrote a internal tool in Java to decipher information from appliance model numbers',
    ],
    tags: ['Java', 'AWS', 'GitHub'],
  },
  {
    id: 3,
    title: 'Advanced Engineering Concepts Co-op',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2018, month: 4 },
    endDate: { year: 2018, month: 6 },
    description:
      'Led the research and development of two tech demos using augmented (AR) and virtual reality (VR) technologies. This was my final co-op rotation at GE Appliances.',
    accomplishments: [
      'Developed a VR kitchen experience in Unity written in C# for the Vive',
      'Created an AR virtual assistant in Amazon Sumerian with custom scripts written in JavaScript',
      'Hosted a showcase of the prototypes to the entire IT organization and leadership',
    ],
    tags: ['Unity', 'C#', 'JavaScript', 'AWS'],
  },
  {
    id: 4,
    title: 'Cloud Engineer',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2019, month: 6 },
    endDate: { year: 2019, month: 11 },
    description:
      'Served as a technical expert during the organizations migration from an existing SAML solution to a new identity provider, Auth0. This was my first rotation in the Digital Leadership Development Program (DLDP).',
    accomplishments: [
      'Coordinated efforts between multiple teams in IT to migrate their applications to Auth0 and diagnosed any issues encountered',
      'Developed a serverless single page application using React.js, AWS Lambda, and Amazon API Gateway that streamlined the Auth0 onboarding process',
      'Worked with enterprise architects to host secure LDAP connectors within our AWS cloud environment',
    ],
    tags: ['JavaScript', 'React.js', 'HTML', 'CSS', 'AWS', 'Auth0', 'GitHub'],
  },
  {
    id: 5,
    title: 'Project Leader - HR DT',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2020, month: 0 },
    endDate: { year: 2020, month: 5 },
    description:
      'Led multiple projects across the HR DT team, such as vendor migrations and software upgrades. This was my second rotation in the Digital Leadership Development Program (DLDP).',
    accomplishments: [
      'Drove upgrade efforts to Workday 2020R1 by tracking accomplishments and coordinating testing efforts between technology and business teams',
      'Managed the migration of 12 existing integrations from our legacy EMF system to Workday',
      'Developed a new internal process within SmartSheet to track vendor engagements',
      'Coordinated meetings and communications between developers and third-party vendors when transitioning to a new relocation service vendors',
    ],
    tags: ['Project Management'],
  },
  {
    id: 6,
    title: 'Web Developer',
    company: 'Chibo',
    logo: '/images/Chibo_Logo.png',
    startDate: { year: 2020, month: 3 },
    endDate: { year: 2020, month: 5 },
    description:
      "Joined the Chibo team, an internal microenterprise at GE Appliances, and developed new features in React for Chibo's live interactive cooking platform. This was a bubble assignment taken alongside the responsibilities at my current full-time role.",
    accomplishments: [
      'Developed multiple pages in the application, including the home, profile, and recipe view pages',
      'Implemented reusable components used across the entire site, such as recipe blocks and navigation menus',
    ],
    tags: ['JavaScript', 'React.js', 'Next.js', 'HTML', 'CSS', 'GitHub'],
  },
  {
    id: 7,
    title: 'Software Developer - Local Delivery',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2020, month: 6 },
    endDate: { year: 2020, month: 11 },
    description:
      'Implemented multiple data processing tools and pipelines hosted in Amazon Web Services that modernized and digitized the home delivery process. This was my third rotation in the Digital Leadership Development Program (DLDP).',
    accomplishments: [
      'Developed an image processing pipeline hosted in AWS that used OpenCV to flag potential low-quality images uploaded by delivery agents',
      'Enhanced existing delivery Java Spring Boot web application to allow agents to store and manage alerts and documents',
      'Created a internal short link generator using Lambda and API Gateway that allowed the business to share documents stored in S3 to customers in a user-friendly format',
      'Applied AWS Textract to parse and crop delivery information from forms uploaded by delivery agents',
    ],
    tags: ['Java', 'Spring Boot', 'AWS', 'Python', 'GitHub'],
  },
  {
    id: 8,
    title: 'Ecommerce Developer',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2021, month: 0 },
    endDate: { year: 2021, month: 5 },
    description:
      'Worked on a new consumer portal for order tracking and other process improvements related to ecommerce operations. This was my final rotation in the Digital Leadership Development Program (DLDP).',
    accomplishments: [
      'Implemented a CI/CD pipeline in Jenkins that manages that automates the deployment of BigCommerce themes for https://geappliances.com',
      'Developed a consumer portal for order tracking (https://e.geappl.io/) using HTML, CSS, and jQuery that replaced an existing vendor solution',
    ],
    tags: ['Jenkins', 'HTML', 'CSS', 'Javascript', 'JQuery', 'GitHub'],
  },
  {
    id: 9,
    title: 'Cloud Engineer',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2021, month: 5 },
    description:
      'Acting as one of the primary front-end developers for the external interface vertical within the Smart Home Solutions team.',
    accomplishments: [
      'Leading the technical development and developing new coding standards for multiple internal web applications/tools with various frameworks, libraries, and tools, such as React, Redux, Next.js, Jest, Axios, Plop, and Husky',
      'Developing features, such as Stripe integration and authentication pages, and handling bug fixes for the SmartHQ Commercial Laundry and Property Management owner dashboard',
      'Coordinated with cross-functional teams during an organization-wide migration to a new identity provider; this involved gathering requirements from stakeholders, creating and running test plans, managing tickets for applications owned by my team',
    ],
    tags: [
      'HTML',
      'CSS',
      'Javascript',
      'React.js',
      'Next.js',
      'GitHub',
      'UI/UX Design',
      'Figma',
    ],
  },
];

export default EXPERIENCES;
