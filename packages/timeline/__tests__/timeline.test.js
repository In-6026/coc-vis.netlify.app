'use strict';

const timeline = require('..');
const assert = require('assert').strict;

assert.strictEqual(timeline(), 'Hello from timeline');
console.info('timeline tests passed');
