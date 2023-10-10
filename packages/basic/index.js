module.exports = {
  rules: {
    'semi': ['error', 'always'],
    'jsonc/comma-dangle': ['error', 'always'],
    'n/prefer-global/process': ['off'], // One day we might turn this on. See: https://github.com/antfu/eslint-config/pull/214
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
        groups: [
          [
            '==',
            '!=',
            '===',
            '!==',
            '>',
            '>=',
            '<',
            '<=',
          ],
          [
            '&&',
            '||',
          ],
          [
            'in',
            'instanceof',
          ],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.json'],
      rules: {
        'jsonc/comma-dangle': ['error', 'never'],
      },
    },
  ],
};
