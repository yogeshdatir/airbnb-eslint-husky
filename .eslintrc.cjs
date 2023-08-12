module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['*.config.[jt]s'],
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    // Note: you must disable the base rule as it can report incorrect errors
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'linebreak-style': ['error', 'windows'],
  },
};
