import { readdirSync, readFileSync } from 'fs';

// Get a list of directories in the given location
const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .map((dir) => {
      return { name: dir.name, value: dir.name };
    });

export default function (plop) {
  let directories = getDirectories('./src/components');

  /* === Component Generator === */

  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your component?',
      },
      {
        type: 'confirm',
        name: 'isCommon',
        message: 'Will this component be used on multiple pages?',
      },
      {
        when: function (response) {
          return response.isCommon === false;
        },
        type: 'list',
        name: 'page',
        message: 'What page will use this component?',
        choices: directories,
      },
    ],
    actions: (data) => {
      const path = data.isCommon
        ? 'src/components/Common/'
        : 'src/components/' + data.page + '/';

      let actions = data.isCommon
        ? [
            // Create a component file
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.js',
              templateFile: 'plopTemplates/component/Component.js.hbs',
            },
            // Create an index file
            {
              type: 'add',
              path: path + '{{pascalCase name}}/index.js',
              templateFile: 'plopTemplates/component/Component.index.js.hbs',
            },
            // Export the component from the common index
            {
              type: 'append',
              path: path + 'index.js',
              pattern: '/* PLOP_INJECT_EXPORT */',
              template: "export * from './{{pascalCase name}}';",
            },
            // // Generate a test file
            // {
            //   type: "add",
            //   path: path + "{{pascalCase name}}/{{pascalCase name}}.test.js",
            //   templateFile: "plopTemplate/Component.test.js.hbs",
            // },
            // // Generate a storybook file
            // {
            //   type: "add",
            //   path: path + "{{pascalCase name}}/{{pascalCase name}}.stories.js",
            //   templateFile: "plopTemplate/Component.stories.js.hbs",
            // },
          ]
        : [
            // Create a component file
            {
              type: 'add',
              path: path + '{{pascalCase name}}/{{pascalCase name}}.js',
              templateFile: 'plopTemplates/component/Component.js.hbs',
            },
            // Create an index file
            {
              type: 'add',
              path: path + '{{pascalCase name}}/index.js',
              templateFile: 'plopTemplates/component/Component.index.js.hbs',
            },
            // // Generate a test file
            // {
            //   type: "add",
            //   path: path + "{{pascalCase name}}/{{pascalCase name}}.test.js",
            //   templateFile: "plopTemplate/Component.test.js.hbs",
            // },
            // // Generate a storybook file
            // {
            //   type: "add",
            //   path: path + "{{pascalCase name}}/{{pascalCase name}}.stories.js",
            //   templateFile: "plopTemplate/Component.stories.js.hbs",
            // },
          ];

      return actions;
    },
  });

  /* === Page Generator === */

  plop.setGenerator('page', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your page?',
      },
    ],
    actions: () => {
      let actions = [
        // Generate the page wrapper
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}PageWrapper/{{pascalCase name}}PageWrapper.js',
          templateFile: 'plopTemplates/component/PageWrapper.js.hbs',
        },
        // Generate the page index
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}PageWrapper/index.js',
          templateFile: 'plopTemplates/component/PageWrapper.index.js.hbs',
        },
      ];

      return actions;
    },
  });

  // Icon Generator

  plop.setGenerator('icon', {
    description: 'Create a new icon',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your icon?',
      },
    ],
    actions: () => {
      let actions = [
        // Generate the icon
        {
          type: 'add',
          path: 'src/components/Common/Icons/{{pascalCase name}}Icon.js',
          templateFile: 'plopTemplates/icons/Icon.js.hbs',
        },
        // Add the icon import to the icon index
        {
          type: 'append',
          path: 'src/components/Common/Icons/index.js',
          pattern: '/* PLOP_INJECT_IMPORT */',
          template:
            "import {{pascalCase name}}Icon from './{{pascalCase name}}Icon';",
        },
        // Add the icon import to the icon index
        {
          type: 'append',
          path: 'src/components/Common/Icons/index.js',
          pattern: '/* PLOP_INJECT_EXPORT */',
          template: '\t{{pascalCase name}}Icon,',
        },
      ];

      return actions;
    },
  });
}
