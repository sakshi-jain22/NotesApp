module.exports = {
  extends: ['react-app'],
  rules: {
    'no-shadow': 'off',
    'import/order': 2,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-explicit-any': 1,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
};
