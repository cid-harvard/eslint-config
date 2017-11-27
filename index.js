module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jest/recommended'],
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2],
    'no-confusing-arrow': 'error',
    'no-buffer-constructor': 'error',
    'switch-colon-spacing': ['error', {after: true, before: false}],
    'brace-style': ['error', '1tbs'],
    'comma-spacing': ['error', {'before': false, 'after': true}],
    'comma-style': ['error', 'last'],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-multiple-empty-lines': 'error',
    'semi': ['error', 'always'],
  },
  overrides: [
    {
      files: ['src/**/__tests__/*.js', '**/*.test.js'],
      rules: {
        'quote-props': ['error', 'as-needed'],
      },
    },
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
    jasmine: true,
  },
  plugins: [
    'react',
    'jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
};
