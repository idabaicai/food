module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "max-len" : ["error", {code : 300}],
    "no-restricted-syntax": 0,
    "class-methods-use-this": 0,
    "no-underscore-dangle":  'off',
    "no-return-assign":0,
    "consistent-return": 0,
    "no-unused-vars": 0,
    "global-require": 0,
    "no-undef": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
