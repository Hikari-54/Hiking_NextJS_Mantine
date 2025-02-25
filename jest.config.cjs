const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  preset: 'ts-jest',
  // moduleNameMapper: {
  //   '^@/components/(.*)$': '<rootDir>/src/components/$1',
  //   '^@/pages/(.*)$': '<rootDir>/pages/$1',
  // },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
