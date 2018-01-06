import config from '../'

const ERROR = 'error'

describe('config', () => {
  it('should extend standard', () => {
    expect(config.extend).toBe('standard')
  })

  it('should include Jest methods in globals', () => {
    const {
      afterAll,
      afterEach,
      beforeAll,
      beforeEach,
      describe,
      expect,
      it,
      jest,
    } = config.globals

    expect(afterAll).toBe(false)
    expect(afterEach).toBe(false)
    expect(beforeAll).toBe(false)
    expect(beforeEach).toBe(false)
    expect(describe).toBe(false)
    expect(expect).toBe(false)
    expect(it).toBe(false)
    expect(jest).toBe(false)
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
})
