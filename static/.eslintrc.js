// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier/flowtype'
  ],
  parserOptions: {
    ecmaFeatures: {},
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/no-unescaped-entities': 0
  }
};
