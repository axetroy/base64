/**
 * Created by axetroy on 16-4-25.
 */

// add.test.js
var base64 = require('../base64');

var expect = require('chai').expect;

describe('加密后再解密，内容是否与原本的一致', function () {

  var list = [
    'abcdef',
    'abcdef123',
    'abcdef123{}',
    'abcdef123{}[]',
    'abcdef123{}[],',
    'abcdef123{}[],.',
    'abcdef123{}[],./',
    'abcdef123{}[],./:',
    'abcdef123{}[],./:"',
    'abcdef123{}[],./:"',
    'abcdef123{}[],./:"~',
    'abcdef123{}[],./:"~!',
    'abcdef123{}[],./:"~!@',
    'abcdef123{}[],./:"~!@#',
    'abcdef123{}[],./:"~!@#$',
    'abcdef123{}[],./:"~!@#$%',
    'abcdef123{}[],./:"~!@#$%^',
    'abcdef123{}[],./:"~!@#$%^&',
    'abcdef123{}[],./:"~!@#$%^&*',
    'abcdef123{}[],./:"~!@#$%^&*(',
    'abcdef123{}[],./:"~!@#$%^&*()',
    'abcdef123{}[],./:"~!@#$%^&*()_',
    'abcdef123{}[],./:"~!@#$%^&*()_+',
    'abcdef123{}[],./:"~!@#$%^&*()_+ ',
    'abcdef123{}[],./:"~!@#$%^&*()_+    ',
    // not support
    // 'abcdef123{}[],./:"~!@#$%^&*()_+    汉字',
  ];

  list.forEach(function (val) {
    it('测试：' + val, function () {
      var encode = base64.encode(val);
      if (!encode) {
        encode = Math.random();
      }
      expect(base64.decode(encode)).to.be.equal(val);
    });
  });


});