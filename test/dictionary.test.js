'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');

const fakeElement = () => ({
  value: '',
  addEventListener: () => {},
  select: () => {},
  setSelectionRange: () => {},
  classList: { toggle: () => {} },
});

global.document = {
  querySelector: () => fakeElement(),
  getElementById: () => fakeElement(),
};

const { translator } = require('../assets/js/scripts.js');

test('converts Latin letters typed on Persian keyboard', () => {
  assert.equal(translator()('sghl'), 'سلام');
});

test('converts Persian letters typed on English keyboard', () => {
  assert.equal(translator()('سلام'), 'sghl');
});

test('keeps unrecognized characters unchanged', () => {
  assert.equal(translator()('a1?'), 'ش1؟');
});
