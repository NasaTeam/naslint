var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  eslint: eslint,
  cmd: 'naslint',
  tagline: 'lint nabulas smart contract',
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.js')
  }
}
