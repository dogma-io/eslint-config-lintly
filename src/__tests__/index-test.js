import config from '../'

const ERROR = 'error'

describe('config', () => {
  it('should extend standard config', () => {
    expect(config.extends).toContain('standard')
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
})
