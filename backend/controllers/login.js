const db = require('../db');
const jwt = require('jsonwebtoken');
const users = require('../lib/users');
const secret = 'fakeTempSecret'
const JWT_EXPIRATION_TIME = '365d';

/**
  * POST /sessions
  *
  * Returns a JWT, given a username and password.
  * @method login
  * @param {String} event.body.username
  * @param {String} event.body.password
  * @throws Returns 401 if the user is not found or password is invalid.
  * @returns {Object} jwt that expires in 5 mins
  */
module.exports.handler = async (event, context, callback) => {
  const { email, password } = JSON.parse(event.body);
	let user = {};
  try {
    // Authenticate user
    user = await users.login(email, password);
    console.log("USER DATA", user);
  } catch (e) {
    console.log(`Error logging in: ${e.message}`);
    const response = { // Error response
      statusCode: 401,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: e.message,
      }),
    };
    callback(response);
  }

	try {
		// Issue JWT  process.env.JWT_SECRET
		const token = jwt.sign({ user }, secret, { expiresIn: JWT_EXPIRATION_TIME });
		console.log(token, {email});
		await db.User.update({ remember_token: token }, { where: { email }})
			.then((rowsUpdated) => {
				console.log(rowsUpdated);
			})
			console.log(`JWT issued: ${token}`);
		const response = { // Success response
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify({
				token
			}),
		};
		// Return response
		callback(null, response);
	} catch (e) {
		console.log(`Error logging in: ${e.message}`);
		callback({
			statusCode: 401,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			body: JSON.stringify({
				error: e.message
			}),
		});
	}
};
