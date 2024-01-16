module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: [
    { 'react-hooks/rules-of-hooks': 'off' },
    { 'react-hooks/exhaustive-deps': 'warn' },
  ],
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
}
