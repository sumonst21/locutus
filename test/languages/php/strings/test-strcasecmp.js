XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strcasecmp = require('/Users/kvz/code/phpjs/src/php/strings/strcasecmp.js')

describe('php', function () {
  describe('strings.strcasecmp.js', function () {
    it('should pass test 1', function (done) {
      strcasecmp('Hello', 'hello');
      expected = 0
      result = strcasecmp('Hello', 'hello');
      expect(result).to.equal(expected)
      done()
    })
  })
})