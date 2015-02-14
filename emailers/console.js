/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const nodemailer = require('nodemailer');

// Pipes all messages to stdout

function ConsoleTransport(options) {
  options = options || {};
  this.options = options;
  this._logger = options.logger;
}

ConsoleTransport.prototype.send = function (email, callback) {
  this._logger.verbose(JSON.stringify(email.data, null, 2));

  callback(null, email);
};

module.exports = function (logger) {
  return nodemailer.createTransport(new ConsoleTransport({
    name: 'console',
    logger: logger
  }));
};
