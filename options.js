const eslint = require('eslint')
const path = require('path')
const pkg = require('./package.json')

const defaultOpts =  {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint: eslint,
  cmd: 'naslint',
  tagline: 'lint nebulas smart contract',
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.js')
  }
}

function optionsFactory({ checkTS }) {
  if (checkTS) {
    return {
      ...defaultOpts,
      eslintConfig: {
        configFile: path.join(__dirname, 'eslintrc-ts.js')
      }
    }
  }
  return defaultOpts
}

module.exports = optionsFactory
