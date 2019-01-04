const db = require('../db');

/**
  * Returns a user, given a username and valid password.
  *
  * @method login
  * @param {String} email - user's email address
  * @param {String} password  - Allow / Deny
  * @throws Will throw an error if a user is not found or if the password is wrong.
  * @returns {Object} user
  */
const login = async (email, password) => {

	// find the user
	const user = await db.User.findOne({ email })
		.then(user => user.dataValues);

	console.log("the user has been found ==> ", user)

  if (!user) throw new Error('User not found!');

	let hasValidPassword = false;
	// bcrypt the incoming password and compare it to the stored password
	bcrypt.compare(password, hash, function (err, res) {
		// if res === true
		hasValidPassword = res;
	});

  if (!hasValidPassword) throw new Error('Invalid password');
	delete user.password
  return user;
};

module.exports = {
  login,
};
