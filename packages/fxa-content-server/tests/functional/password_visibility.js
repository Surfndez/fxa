/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

const { registerSuite } = intern.getInterface('object');
const FunctionalHelpers = require('./lib/helpers');
const selectors = require('./lib/selectors');

const config = intern._config;
const ENTER_EMAIL_URL = config.fxaContentRoot;

const {
  clearBrowserState,
  mousedown,
  mouseup,
  noSuchAttribute,
  openPage,
  testAttributeEquals,
  testElementExists,
  type,
  visibleByQSA,
} = FunctionalHelpers;

registerSuite('password visibility', {
  beforeEach: function() {
    return this.remote.then(clearBrowserState());
  },
  tests: {
    'show password ended with mouseup': function() {
      return (
        this.remote
          .then(openPage(ENTER_EMAIL_URL, selectors.ENTER_EMAIL.HEADER))
          .then(type(selectors))
          .then(type('#password', 'p'))
          .then(testElementExists('.show-password-label'))
          .then(visibleByQSA('.show-password-label'))

          // turn password field into a text field
          .then(mousedown('.show-password-label'))

          .then(testAttributeEquals('#password', 'type', 'text'))
          .then(testAttributeEquals('#password', 'autocomplete', 'off'))

          // turn text field back into a password field
          .then(mouseup('.show-password-label'))

          .then(testAttributeEquals('#password', 'type', 'password'))
          .then(noSuchAttribute('#password', 'autocomplete'))

          // \u0008 is unicode for backspace char. By default `type` clears the
          // element value before typing, we want the character to do so.
          .then(type('#password', '\u0008', { clearValue: true }))
          // give a short pause to clear the input
          .sleep(1000)
          // element still exists
          .then(testElementExists('.show-password-label'))
      );
    },
  },
});
