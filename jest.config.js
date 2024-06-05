module.exports = {
  preset: 'jest-preset-angular',
  coverageReporters: ['lcov','clover','text','text-summary'],
  coverageDirectory: 'reports',
  clearMocks: true,
  testMatch: ['**/*.spec.ts'],
};
