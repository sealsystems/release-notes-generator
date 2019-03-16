'use strict';

const assert = require('assertthat');

const generate = require('../lib/generate');

suite('generate', () => {
  test('is a function', async () => {
    assert.that(generate).is.ofType('function');
  });
});
