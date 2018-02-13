import config from '../'

const ERROR = 'error'

describe('config', () => {
  it('should extend standard config', () => {
    expect(config.extends).toContain('standard')
  })

  it("should extend flowtype plugin's recommended config", () => {
    expect(config.extends).toContain('plugin:flowtype/recommended')
  })

  it("should extend react plugin's recommended config", () => {
    expect(config.extends).toContain('plugin:react/recommended')
  })

  it("should extend react-compat plugin's recommended config", () => {
    expect(config.extends).toContain('plugin:react-compat/recommended')
  })

  it('should include Jest methods in globals', () => {
    const {globals} = config

    expect(globals.afterAll).toBe(false)
    expect(globals.afterEach).toBe(false)
    expect(globals.beforeAll).toBe(false)
    expect(globals.beforeEach).toBe(false)
    expect(globals.describe).toBe(false)
    expect(globals.expect).toBe(false)
    expect(globals.it).toBe(false)
    expect(globals.jest).toBe(false)
  })

  it('should include fetch in globals for browser code', () => {
    expect(config.globals.fetch).toBe(false)
  })

  it('should use babel-eslint parser', () => {
    expect(config.parser).toBe('babel-eslint')
  })

  it('should include flowtype plugin and configure it', () => {
    expect(config.plugins).toContain('flowtype')
    expect(config.settings.flowtype).toEqual({
      onlyFilesWithFlowAnnotation: false,
    })
  })

  it('should include prettier plugin and configure it', () => {
    expect(config.plugins).toContain('prettier')
    expect(config.rules['prettier/prettier']).toEqual([
      ERROR,
      {
        bracketSpacing: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ])
    expect(config.rules['space-before-function-paren']).toEqual([0])
  })

  it('should include react plugin and configure it', () => {
    expect(config.plugins).toContain('react')
    expect(config.rules['react/jsx-uses-react']).toEqual([ERROR])
    expect(config.rules['react/jsx-uses-vars']).toEqual([ERROR])
  })

  it('should include react-compat plugin', () => {
    expect(config.plugins).toContain('react-compat')
  })

  it('should configure stricter rules for non mock/test modules', () => {
    const overrides = config.overrides.find(
      o =>
        o.excludedFiles.length === 2 &&
        o.excludedFiles.includes('**/__mocks__/**/*.js') &&
        o.excludedFiles.includes('**/__tests__/**/*.js') &&
        o.files.length === 1 &&
        o.files.includes('**/*.js'),
    )

    expect(overrides.rules).toEqual({
      'flowtype/define-flow-type': [ERROR],
      'flowtype/no-flow-fix-me-comments': [ERROR],
      'flowtype/no-primitive-constructor-types': [ERROR],
      'flowtype/no-weak-types': [ERROR],
      'flowtype/require-exact-type': [ERROR],
      'flowtype/require-parameter-type': [ERROR],
      'flowtype/require-return-type': [ERROR],
      'flowtype/sort-keys': [ERROR],
      'flowtype/use-flow-type': [ERROR],
    })
  })
})
