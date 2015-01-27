/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Send emails to a user

const Promise = require('bluebird');


function toMailConfig(fromAddress, toAddress, subject, htmlEmail, textEmail) {
  var mailConfig = {
    sender: fromAddress,
    to: toAddress,
    subject: subject,
    html: htmlEmail,
    text: textEmail
  };

  return mailConfig;
}


module.exports = function (logger, config) {
  var fromAddress = config.get('sending_user') + '@' + config.get('hostname');
  var mailer = require('./emailers/' + config.get('transport'));

  return {
    send: function (toAddress, subject, htmlEmail, textEmail) {
      logger.info('sending email to `%s`: %s', toAddress, htmlEmail);

      return new Promise(function (resolve, reject) {
        var mailConfig = toMailConfig(fromAddress, toAddress, subject, htmlEmail, textEmail);

        mailer.sendMail(mailConfig, function(err, status) {
          if (err) {
            logger.error('error sending email: %s', String(err));
            return reject(err);
          }
          resolve(status);
        });
      });
    }
  };
};

