#!/usr/bin/env node
'use strict';
const meow = require('meow');
const haikunate = require('./lib/haikunator').default;

const cli = meow(`
    Usage
      $ haikunator

    Options
      -d, --delimiter  Specify a delimeter string || default '-'
      -l, --length     Specify a token length || default 4
      -c, --chars      Characters to use for token || default '0123456789abcdef'
      -h, --hex        Encode token in hex, overrides characters set with '-c'  || default false
      -s, --seed       Seed used for random-seed generator || default undefined

    Examples
      $ haikunator -h
      odd-firefly-df9d
      $ haikunator -d='.'
      misty.dust.9120
`, {
    alias: {
      d: 'delimiter',
      l: 'length',
      h: 'hex',
      c: 'chars',
      s: 'seed'
    },
    boolean: ['hex'],
    string:  ['delimiter','length','chars','seed']
});

console.log(haikunate({
  delimiter: cli.flags.delimiter,
  tokenLength: cli.flags.length,
  tokenHex: cli.flags.hex,
  tokenChars: cli.flags.chars,
  seed: cli.flags.seed
}));
