module.exports = {
  extends: [
    '@beetl/eslint-config-ts',
  ],
  rules: {
    'vue/custom-event-name-casing': ['error', 'camelCase', { ignores: ['/^[a-z]+(?:[A-Z](?:[a-z])*)*:[a-z]+(?:[A-Z](?:[a-z])*)*$/u'] }],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: [
          'template',
          'script',
          'style',
        ],
      },
    ],
    'vue/no-dupe-keys': [
      'off'
    ],
  },
};
