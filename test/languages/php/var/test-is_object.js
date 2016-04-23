XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var is_object = require('/Users/kvz/code/phpjs/src/php/var/is_object.js')

describe('php', function () {
  describe('var.is_object.js', function () {
    it('should pass test 1', function (done) {
      is_object('23');
      expected = false
      result = is_object('23');
      expect(result).to.equal(expected)
      done()
    })
    it('should pass test 2', function (done) {
      is_object({foo: 'bar'});
      expected = true
      result = is_object({foo: 'bar'});
      expect(result).to.equal(expected)
      done()
    })
    it('should pass test 3', function (done) {
      is_object(null);
      expected = false
      result = is_object(null);
      expect(result).to.equal(expected)
      done()
    })
  })
})