/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/*global describe, it*/

const assert = require('chai').assert;
const logger = {
  info: function () {
  },
  error: function () {
  },
  verbose: function (message) {
    console.log('message', message);
  }
};

describe('console', function () {
  var emailer = require('../../emailer')({
    transport: 'console',
    logger: logger,
    fromAddress: 'sender@rum-diary.org'
  });

  describe('send', function () {
    it('sends emails', function () {
      return emailer.send('dropontheground@testuser.com', 'subject', 'html email', 'text email')
        .then(function (status) {
          assert.ok(status.data.html, 'html email');
        });
    });
  });
});

describe('sendmail', function () {
  var emailer = require('../../emailer')({
    transport: 'sendmail',
    logger: logger,
    fromAddress: 'sender@rum-diary.org'
  });

  describe('send', function () {
    it('sends emails', function () {
      return emailer.send('dropontheground@testuser.com', 'subject', 'html email', 'text email')
        .then(function (status) {
          assert.ok(status.data.html, 'html email');
        });
    });
  });
});


describe('smtp', function () {
  var emailer = require('../../emailer')({
    transport: 'smtp',
    logger: logger,
    fromAddress: 'sender@rum-diary.org'
  });

  describe('send', function () {
    it('sends emails', function () {
      return emailer.send('dropontheground@testuser.com', 'subject', 'html email', 'text email')
        .then(function (status) {
          assert.ok(status.data.html, 'html email');
        });
    });
  });
});


