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
      'Assisted in the development of new voice commands for Alexa and Google Home platforms for washers and dryers',
      'Developed an API to connect third-party developers to send commands to smart appliances',
      'Created a prototype voice application using Google Direct Actions',
      'Wrote an internal tool in Java to decipher appliance model numbers for information such as features, capacity, and model color',
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
      'Led the research and development of two tech demos using augmented (AR) and virtual reality (VR).',
    accomplishments: [
      'Developed a VR kitchen sandbox experience for the Vive in Unity written in C#',
      'Created an AR virtual assistant in Amazon Sumerian with custom scripts written in JavaScript',
      'Hosted a showcase of the prototypes to the entire IT organization and leadership; the prototype was then used as a recruitment tool at college campuses to showcase innovation within the company',
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
      "Served as a technical point of contact during the organization's migration from an existing SAML solution, Shibboleth, to a new identity provider, Auth0.",
    accomplishments: [
      'Coordinated efforts between multiple teams in IT to migrate their applications to Auth0 and diagnosed any issues encountered',
      'Developed a serverless web application using React.js, Bootstrap, AWS Lambda, and Amazon API Gateway that streamlined the Auth0 onboarding process',
      'Worked with enterprise architects to host secure LDAP connectors within our AWS cloud environment',
    ],
    tags: [
      'JavaScript',
      'React.js',
      'HTML',
      'CSS',
      'Bootstrap',
      'AWS',
      'Auth0',
      'GitHub',
    ],
  },
  {
    id: 5,
    title: 'Project Leader - HR DT',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2020, month: 0 },
    endDate: { year: 2020, month: 5 },
    description:
      'Led multiple projects across the HR DT team, such as vendor migrations and software upgrades.',
    accomplishments: [
      'Drove upgrade efforts to Workday 2020R1 by tracking accomplishments and coordinating testing efforts between digital technology, business, and third-party organizations',
      'Managed the migration of 12 existing integrations from our legacy EMF system to Workday',
      'Developed a new internal process within SmartSheet to track and monitor vendor engagements across the HR team',
      'Coordinated meetings and handled communications between developers and third-party vendors when transitioning to a new relocation service vendor',
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
      'Developed multiple pages on the Chibo platform, including the home, profile, and recipe view pages',
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
      'Implemented multiple data processing tools and pipelines in Amazon Web Services that modernized and digitized the home delivery process.',
    accomplishments: [
      'Developed an image processing pipeline in AWS that used OpenCV to flag potential low-quality, blurry images uploaded by delivery agents',
      'Enhanced the existing delivery Java Spring Boot web application to allow agents to store and manage delivery alerts and documents',
      'Created a internal short link generator microservice using Lambda and API Gateway that allowed the business to share documents stored in S3 to customers in a user-friendly format via SMS',
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
      'Developed a new consumer portal for order tracking and CI/CD pipeline in Jenkins for BigCommerce themes.',
    accomplishments: [
      'Implemented a CI/CD pipeline in Jenkins that automated the deployment of BigCommerce themes for https://geappliances.com',
      'Developed a consumer portal for order tracking (https://e.geappl.io/) using HTML, CSS, and jQuery that replaced an existing vendor solution to eliminate vendor costs',
    ],
    tags: ['Jenkins', 'HTML', 'CSS', 'Javascript', 'JQuery', 'GitHub'],
  },
  {
    id: 9,
    title: 'Front End Developer',
    company: 'GE Appliances',
    logo: '/images/GE_Appliances_Logo.png',
    startDate: { year: 2021, month: 5 },
    description:
      'Currently leading the codification of front end standards and contributing on multiple fronts to the development of multiple web applications for the Smart Home Solutions team',
    accomplishments: [
      'Driving the development of new coding standards for our web applications. So far, I have advocated for testing with Jest and Cypress, introduced component documentation via Storybook, and implemented a CI/CD pipeline in GitHub Actions for static sites',
      'Leading the development of an new internal content curation tool; tasks include gathering business requirements, designing the UX in Figma, scoping out user stories, delegating tasks, assisting other developers on the team, and development',
      'Working with various frameworks, libraries, and tools--React, Redux, Next.js, Jest, Cypress, Axios, Plop, Bootstrap, Framer Motion, Storybook, and much more',
      'Developing features and implementing bug fixes for the SmartHQ Commercial Laundry and Property Management owner dashboard--such as Stripe integration and authentication pages',
      'Coordinated with cross-functional teams during an organization-wide migration from Gigya to Salesforce; this involved gathering requirements from stakeholders, creating and running test plans, managing tickets for applications maintained by the team',
    ],
    tags: [
      'HTML',
      'CSS',
      'Bootstrap',
      'Javascript',
      'React.js',
      'Next.js',
      'Jest',
      'GitHub',
      'UI/UX Design',
      'Figma',
    ],
  },
];

export default EXPERIENCES;
