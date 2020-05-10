module.exports = {
  automock: false,
  clearMocks: true,
  moduleNameMapper: {
    '.+\\.(jpg|jpeg|png|gif|eot|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|acc|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost',
}
