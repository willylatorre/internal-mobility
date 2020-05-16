module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.css$': '<rootDir>/tests/mocks/styleMock.js',
    '^@/(.*)/assets/img/(.*)$': 'jest-transform-stub'
  },
  moduleFileExtensions: ['js', 'jsx', 'vue', 'json'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/'],
  setupFiles: ['<rootDir>/tests/unit/setup']
}
