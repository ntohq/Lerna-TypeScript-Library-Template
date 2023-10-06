'use strict';

const library = require('..');
const assert = require('assert').strict;

assert.strictEqual(library(), 'Hello from library');
console.info('library tests passed');
