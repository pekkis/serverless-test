'use strict';

const axios = require('axios');
const kakkapylly = require('./services/kakka');

module.exports.kakka = (event, context, callback) => {

  axios
    .get('http://diktaattoriporssi.com/api/dictator/manuel-noriega')
    .then(ret => {

      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: ret.data,
          ripuli: kakkapylly.getKakka(),
        }),
      };

      callback(null, response);
    }).catch(e => {

      const response = {
        statusCode: 500,
        body: JSON.stringify({
          error: e
        })
      };

      callback(null, response);

    });
};
