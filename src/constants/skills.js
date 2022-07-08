export const SKILLS = [
  {
    name: 'Front End Development',
    subskills: [
      'HTML',
      'CSS',
      'Javascript',
      'React.js',
      'Next.js',
      'Redux',
      'Sass',
      'Jest',
      'Cypress',
    ],
  },
  {
    name: 'UI/UX Design',
    subskills: ['Figma'],
  },
  {
    name: 'Amazon Web Services',
    subskills: [
      'Lambda',
      'API Gateway',
      'S3',
      'DynamoDB',
      'CloudFormation',
      'CloudFront',
      'Route53',
      'Rekognition',
      'Sumerian',
    ],
  },
  {
    name: 'CI/CD',
    subskills: ['Jenkins', 'GitHub Actions'],
  },
  {
    name: 'Github',
    subskills: [],
  },
  {
    name: 'Game Development',
    subskills: ['C#', 'Unity'],
  },
];

export const getSkillByName = (name) => {
  return SKILLS.find((skill) => skill.name === name);
};
