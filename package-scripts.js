const eslintCommand = 'eslint index.js --config index.js';

module.exports = {
  scripts: {
    eslint: {
      script: eslintCommand,
      fix: {
        script: `${eslintCommand} --fix`,
      },
    },
  },
};
