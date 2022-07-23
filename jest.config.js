module.exports = {
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '@alias/(.*)': '<rootDir>/src/path/to/alias/$1',
    '@/Common': '<rootDir>/src/components/Common/index',
    '@/lib/(.*)': '<rootDir>/src/lib/$1',
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/slices/(.*)': '<rootDir>/src/slices/$1',
    '@/styles/(.*)': '<rootDir>/styles/$1',
    '@/hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@/constants/(.*)': '<rootDir>/src/constants/$1',
    tailwindConfig: '<rootDir>/tailwind.config.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.js',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
};
