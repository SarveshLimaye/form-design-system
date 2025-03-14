module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', 'src'],
  rootDir: './',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib/'],
  setupFilesAfterEnv: ['<rootDir>/scripts/node/setupTests.js', 'jest-prop-type-error'],
  snapshotSerializers: ['<rootDir>/node_modules/enzyme-to-json/serializer'],
};
