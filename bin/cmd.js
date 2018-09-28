#!/usr/bin/env node

const minimist = require('minimist')
const CompactToStylishStream = require('snazzy')
const cp = require('child_process')
const NASLINT_CMD = require.resolve('./inner.js')

const snazzy = CompactToStylishStream()
const argv = minimist(process.argv.slice(2))

function debug(...args) {
  if (!argv.debug) {
    return
  }
  console.log(...args)
}

debug('argv: ', argv)

process.on('exit', function(code) {
  if (code === 0 && snazzy.exitCode !== 0) {
    process.exit(snazzy.exitCode)
  }
})

process.stdout.on('error', function() {})

if (!process.stdin.isTTY || argv._[0] === '-' || argv.stdin) {
  process.stdin.pipe(snazzy).pipe(process.stdout)
} else {
  const args = process.argv.slice(2)
  const naslint = cp.spawn('node', [NASLINT_CMD, ...args])
  naslint.stderr.pipe(process.stderr)
  naslint.stdout.pipe(snazzy).pipe(process.stdout)

  let naslintCode
  naslint.on('exit', function(code) {
    naslintCode = code
  })
  process.on('exit', function(code) {
    if (code === 0 && naslintCode !== 0) {
      console.error('non-zero exit from the `naslint` command')
      process.exit(naslintCode)
    }
  })
}
