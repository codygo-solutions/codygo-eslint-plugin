import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testTimeout: 15000,
  testMatch: ['**/*.spec.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
  },
};

export default config;
