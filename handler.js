'use strict';

module.exports.pieruKeisari = (event, context, callback) => {

  const id = event.pathParameters.id;

  const response = {
    statusCode: 500,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: id + ' on pierukeisari!',
    }),
  };

  callback(null, response);
};
