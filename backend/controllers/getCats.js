
/**
  * GET /cats
  *
  * Returns a collection of cats.
  * @returns {Array.Object}
  */
module.exports.handler = (event, context, callback) => {
	let url = process.env.DB;
	console.log(url);
	// console.log(conn(url));

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true, // Required for CORS support to work
    },
    body: JSON.stringify({
      cats: [
        {
          id: 1,
					something: url,
          name: 'Furball',
          address: '2 Fur Lane',
        },
      ],
    }),
  };

  callback(null, response);
};
