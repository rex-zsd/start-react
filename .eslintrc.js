module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  globals: {
    CONFIG: true
  },
  installedESLint: true,
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.base.js'
      }
    }
  }
};
