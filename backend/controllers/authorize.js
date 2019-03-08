const _ = require('lodash');
const jwt = require('jsonwebtoken');
const utils = require('../lib/utils');
const secret = 'fakeTempSecret'

// Returns a boolean whether or not a user is allowed to call a particular method
// A user with scopes: ['pangolins'] can
// call 'arn:aws:execute-api:ap-southeast-1::random-api-id/dev/GET/pangolins'
const authorizeUser = (userScopes, methodArn) => {
  console.log(`authorizeUser ${JSON.stringify(userScopes)} ${methodArn}`);
  const hasValidScope = _.some(userScopes, scope => _.endsWith(methodArn, scope));
  return true;
	return hasValidScope;
};

/**
  * Authorizer functions are executed before your actual functions.
  * @method authorize
  * @param {String} event.authorizationToken - JWT
  * @throws Returns 401 if the token is invalid or has expired.
  * @throws Returns 403 if the token does not have sufficient permissions.
  */
module.exports.handler = (event, context, callback) => {
  let token = event.authorizationToken;
  if (token.startsWith('Bearer ')) {
  	// Remove Bearer from string
  	token = token.slice(7, token.length).trimLeft();
  }

  try {
    // Verify JWT process.env.JWT_SECRET
    const decoded = jwt.verify(token, secret);

    // Checks if the user's scopes allow her to call the current endpoint ARN
    const user = decoded.user;
		// for now... not doing access control levels
			// const isAllowed = authorizeUser(user.scopes, event.methodArn);
		let isAllowed = true;

    // Return an IAM policy document for the current endpoint
    const effect = isAllowed ? 'Allow' : 'Deny';
    // const userId = user.username;
    const authorizerContext = { user: JSON.stringify(user) };
    const policyDocument = utils.buildIAMPolicy(user.id, effect, event.methodArn, authorizerContext);

    console.log('Returning IAM policy document');
    callback(null, policyDocument);
  } catch (e) {
    console.log(e.message);
    callback('Unauthorized'); // Return a 401 Unauthorized response
  }
};
