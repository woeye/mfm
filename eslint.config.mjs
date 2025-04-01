import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'semi': ['error', 'never'],
      'no-extra-semi': 'error',
      'quotes': ['error', 'single'],
       "@typescript-eslint/no-explicit-any": "warn",
       "@typescript-eslint/no-unused-vars": 'warn',
    }
  }
]

export default eslintConfig
