#!/usr/bin/env node

const minimist = require('minimist')
const optionsFactory = require('../options')

const argv = minimist(process.argv.slice(2))

function debug(...args) {
  if (!argv.debug) {
    return
  }
  console.log(...args)
}

debug('argv: ', argv)

const checkTS = argv._.some(fileName => fileName.endsWith('.ts'))
const opts = optionsFactory({ checkTS })

require('standard-engine').cli(opts)
