import globals from 'globals'
import eslintPlugin from '@eslint/js'
import tseslint, { configs as tseslintConfigs } from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import stylisticPlugin from '@stylistic/eslint-plugin'
//import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'

const eslintConfig = [
  {
    name: 'custom/eslint/recommended',
    files: ['**/*.mjs', '**/*.ts?(x)'],
    ...eslintPlugin.configs.recommended,
  },
]

const ignoresConfig = [
  {
    name: 'custom/eslint/ignores',
    // the ignores option needs to be in a separate configuration object
    // replaces the .eslintignore file
    ignores: [
      '.next/',
      '.vscode/',
      'public/',
      'src/migrations/',
      'src/app/(payload)/',
    ],
  },
]

const tseslintConfig = tseslint.config(
  {
    name: 'custom/typescript-eslint/recommended',
    files: ['**/*.mjs', '**/*.ts?(x)'],
    extends: [...tseslintConfigs.recommended],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    name: 'custom/typescript-eslint/disable-type-checked',
    files: ['**/*.mjs'],
    ...tseslintConfigs.disableTypeChecked,
  },
)

const stylistcConfig = [
  {
    name: 'custom/stylistic',
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/quotes': ['error', 'single'],
    }
  }
]

const nextConfig = [
  {
    name: 'custom/next/config',
    plugins: {
      react: reactPlugin,
      //'jsx-a11y': jsxA11yPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        React: true,
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      //...jsxA11yPlugin.configs.strict.rules,
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'no-undef': 'error',
      eqeqeq: 'error',
      'no-const-assign': 'warn',
      'no-this-before-super': 'warn',
      'no-unreachable': 'warn',
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
]

export default [...eslintConfig, ...ignoresConfig, ...tseslintConfig, ...nextConfig, ...stylistcConfig]
