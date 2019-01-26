var bcrypt = require('bcryptjs');
const db = require('../db');
const users = require('../lib/users');
const response = require('../utils/response');
// const jwt = require('jsonwebtoken');
// const secret = 'fakeTempSecret'
// const JWT_EXPIRATION_TIME = '365d';

module.exports.handler = async (event, context, callback) => {
	let user = event.user;
	try {
		await bcrypt.hash(user.password, 10, (err, hash) => {
			user.password = hash;
			console.log(hash);
			return db.User.create(user)
				.then(newUser => callback(null, response(`User ${newUser.name} created.`)))
				.catch(err => callback(new Error(err)));
		});
	} catch (err){
		callback(new Error(err));
	}

  // try {
  //   // Authenticate user
  //   const user = users.login(email, password);
  //   console.log(user);

  //   // Issue JWT  process.env.JWT_SECRET
  //   const token = jwt.sign({ user }, secret, { expiresIn: JWT_EXPIRATION_TIME });
	// 	// db.user.findOneAndUpdate({})
  //   console.log(`JWT issued: ${token}`);
  //   const response = { // Success response
  //     statusCode: 200,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify({
  //       token,
  //     }),
  //   };

  //   // Return response
  //   console.log(response);
  //   callback(null, response);
  // } catch (e) {
  //   console.log(`Error logging in: ${e.message}`);
  //   const response = { // Error response
  //     statusCode: 401,
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify({
  //       error: e.message,
  //     }),
  //   };
  //   callback(null, response);
  // }
};
