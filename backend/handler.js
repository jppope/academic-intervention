const db = require('./db');

export const hello = async (event, context, callback) => {
	// let body = JSON.stringify(event.body);
	try {
		await db.User.findOne().then((user) => {
				console.log(user.dataValues)
				callback(null, {
					statusCode: 200,
					body: JSON.stringify({
						user: user.dataValues
					}),
				});
			})
	} catch (err){
		callback(new Error(err));
	}

};
