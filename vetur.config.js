/** @type {import('vls').VeturConfig} */
module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
  },
  projects: [
    {
      root: './packages/renderer',
      tsconfig: './tsconfig.json',
      globalComponents: [
        './src/components/**/*.tsx',
      ],
    },
    {
      root: './packages/main',
      tsconfig: './tsconfig.json',
    },
    {
      root: './packages/preload',
      tsconfig: './tsconfig.json',
    },
  ],
};
