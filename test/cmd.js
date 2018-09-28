var path = require('path')
var test = require('tape')
var crossSpawn = require('cross-spawn')

var CMD_PATH = path.join(__dirname, '..', 'bin', 'cmd.js')

test('command line usage: --help', function(t) {
  t.plan(1)
  const result = crossSpawn.sync('node', [CMD_PATH, '--version'])
  t.equal(result.status, 0, 'zero exit code')
})
