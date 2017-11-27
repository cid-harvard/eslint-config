module.exports = {
  extends: ['./base.js', 'plugin:react/recommended', 'plugin:jest/recommended'],
  overrides: [
    {
      files: ['src/**/__tests__/*.js', '**/*.test.js'],
      rules: {
        'quote-props': ['error', 'as-needed'],
      },
    },
  ],
  env: {
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
  },
};
