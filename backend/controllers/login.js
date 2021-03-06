const db = require('../db');
const jwt = require('jsonwebtoken');
const users = require('../lib/users');
const secret = 'fakeTempSecret'
const JWT_EXPIRATION_TIME = '365d';
// const tok = require('../utils/token');
// const res = require('../utils/response');
import err from '../utils/error';
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
  // variables
  const { email, password } = JSON.parse(event.body);
  let user = {};
  let token = '';
  
  // validate input HERE

  try {
    // Authenticate user
    user = await users.login(email, password);
    
    // create token for security
    token = jwt.sign({ user }, secret, { expiresIn: JWT_EXPIRATION_TIME });

    await db.User.update({ remember_token: token }, { where: { email }})
    .then(rowsUpdated => rowsUpdated)
    
  } catch (e) {
    // eslint-disable-next-line
    console.log(`Error logging in: ${e.message}`);
    let errRes = err(e.message);
    callback(errRes);
  }
  
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      token,
    }),
  });
};
