#! /usr/bin/env node

/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */

const {readFileSync, writeFileSync} = require('fs')
const {join} = require('path')

const INDEX_FLOW_PATH = join(__dirname, '..', 'lib', 'index.js.flow')
const CONTENTS = readFileSync(INDEX_FLOW_PATH, 'utf8')

const FIXED_CONTENTS = [
  'comma-dangle',
  'flowtype/define-flow-type',
  'flowtype/no-flow-fix-me-comments',
  'flowtype/no-primitive-constructor-types',
  'flowtype/no-weak-types',
  'flowtype/require-exact-type',
  'flowtype/require-parameter-type',
  'flowtype/require-return-type',
  'flowtype/sort-keys',
  'flowtype/use-flow-type',
  'import/first',
  'prettier/prettier',
  'react/jsx-uses-react',
  'react/jsx-uses-vars',
  'space-before-function-paren',
].reduce((text, key) => text.replace(`${key}:`, `"${key}":`), CONTENTS)

writeFileSync(INDEX_FLOW_PATH, FIXED_CONTENTS, 'utf8')
