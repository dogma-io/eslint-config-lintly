/**
 * @flow
 */

const ERROR = 'error'
const NEVER = 'never'

module.exports = {
  extends: [
    'standard',
    'plugin:flowtype/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:opinionated/recommended',
    'plugin:react/recommended',
    'plugin:react-compat/recommended',
  ],
  globals: {
    afterAll: false,
    afterEach: false,
    beforeAll: false,
    beforeEach: false,
    describe: false,
    expect: false,
    fetch: false,
    it: false,
    jest: false,
  },
  overrides: [
    {
      excludedFiles: ['**/__mocks__/**/*.js', '**/__tests__/**/*.js'],
      files: ['**/*.js'],
      rules: {
        'flowtype/define-flow-type': [ERROR],
        'flowtype/no-flow-fix-me-comments': [ERROR],
        'flowtype/no-primitive-constructor-types': [ERROR],
        'flowtype/no-weak-types': [ERROR],
        'flowtype/require-exact-type': [ERROR],
        'flowtype/require-parameter-type': [ERROR],
        'flowtype/require-return-type': [ERROR],
        'flowtype/sort-keys': [ERROR],
        'flowtype/use-flow-type': [ERROR],
      },
    },
  ],
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'jsx-a11y',
    'opinionated',
    'prettier',
    'react',
    'react-compat',
  ],
  rules: {
    'comma-dangle': [ERROR, 'always-multiline'],

    // Deveating from standard to satisfy prettier
    'space-before-function-paren': [0],

    // Disabling this for now b/c it expects imports before jest.mock calls
    'import/first': [0],

    'object-curly-spacing': [ERROR, NEVER],

    // Making prettier comply with standard as much as possible
    'prettier/prettier': [
      ERROR,
      {
        bracketSpacing: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    // Make sure imported React isn't marked as unused variable when there is
    // JSX present.
    'react/jsx-uses-react': [ERROR],

    // Make sure imported components aren't marked as unsed variables when they
    // are used in JSX.
    'react/jsx-uses-vars': [ERROR],
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
}
