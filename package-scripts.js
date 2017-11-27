const eslintCommand = 'eslint {index.js,base.js} --config base.js';

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
