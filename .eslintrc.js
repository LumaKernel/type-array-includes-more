module.exports = {
  ignorePatterns: ['!.eslintrc.js'],
  overrides: [
    {
      files: ['*.js'],
      extends: 'airbnb/base',
    },
    {
      files: ['*.ts'],
      extends: 'airbnb-typescript/base',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['test/*.ts', 'test/*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
  ],
};
