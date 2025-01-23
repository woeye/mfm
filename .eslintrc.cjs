module.exports = {
  extends: ["next"],
  //   "eslint:recommended",
  //   'next/core-web-vitals',
  //   "next/typescript"
  // ],
  root: true,
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
  rules: {
    semi: ["error", "always"]
  }
};

// /** @type {import('eslint').Linter.Config} */
// module.exports = {
//   extends: [
//     "eslint:recommended",
//     'next/core-web-vitals',
//     "next/typescript"
//   ],
//   root: true,
//   parserOptions: {
//     project: ['./tsconfig.json'],
//     tsconfigRootDir: __dirname,
//   },
// }
