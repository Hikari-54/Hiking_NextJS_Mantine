module.exports = {
  extends: [
    'mantine', 
    'plugin:@next/next/recommended', 
    'plugin:jest/recommended',
    "eslint:recommended",
    "plugin:testing-library/react",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react-hooks/recommended",
    // '@babel/plugin-transform-runtime',
    // '@babel/plugin-transform-async-to-generator',
    // '@babel/transform-arrow-functions',
    // '@babel/proposal-object-rest-spread',
    // '@babel/proposal-class-properties'
  ],
  plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
  },
};
