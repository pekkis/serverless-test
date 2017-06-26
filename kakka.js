'use strict';

const kakka = require('./services/kakka');

module.exports.kakka = (event, context, callback) => {

  const pieru = kakka.getKakka();

  const response = {
    body: JSON.stringify({
      kakka: pieru,
    }),
  }

  callback(null, response);
};
