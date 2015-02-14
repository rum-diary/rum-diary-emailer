/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const nodemailer = require('nodemailer');
const transport = require('nodemailer-smtp-transport');

module.exports = function (config) {

  return nodemailer.createTransport(transport({
    host: config.get('emailer.smtp.host'),
    secure: config.get('emailer.smtp.useSecureConnection'),
    port: config.get('emailer.smtp.port')
  }));
};

