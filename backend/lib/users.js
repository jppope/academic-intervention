const db = require('../db');
const bcrypt = require('bcryptjs');
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
	let user = {};
	let hasValidPassword = false;

	try {
		// find a user with credentials
		user = await db.User.findAll({where: { email }})
			.then(user => user[0].dataValues);
	} catch (error) {
		console.error(error)
	}

	// validate user was found before going further
  if (!user) throw new Error('User not found!');


	try {
		// compare password to the stored password
		await bcrypt.compare(password, user.password)
			.then(res => hasValidPassword = res);
	} catch (error) {
		if(error) throw new Error("bcrypt aint workin");
	}

  if (!hasValidPassword) throw new Error('Invalid password');
	delete user.password
  return user;
};

module.exports = {
  login,
};
