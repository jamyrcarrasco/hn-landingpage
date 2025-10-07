#!/usr/bin/env node
'use strict';

const legacyFlag = '--openssl-legacy-provider';
const existingNodeOptions = process.env.NODE_OPTIONS || '';

if (!existingNodeOptions.includes(legacyFlag)) {
  process.env.NODE_OPTIONS = `${existingNodeOptions} ${legacyFlag}`.trim();
}

require('react-scripts/scripts/start');
