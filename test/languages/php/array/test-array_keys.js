XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_keys = require('/Users/kvz/code/phpjs/src/php/array/array_keys.js')

describe('php', function () {
  describe('array.array_keys.js', function () {
    it('should pass test 1', function (done) {
      array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
      expected = {0: 'firstname', 1: 'surname'}
      result = array_keys( {firstname: 'Kevin', surname: 'van Zonneveld'} );
      expect(result).to.equal(expected)
      done()
    })
  })
})