const db = require('./db');

export const hello = async (event, context, callback) => {
	// let body = JSON.stringify(event.body);
	try {
		await db.User.findAll({
			attributes: ['id', 'name', 'email']
		}).then((res) => {
			let data = res.map(item => item.dataValues)
				console.log(data)
				callback(null, {
					statusCode: 200,
					body: JSON.stringify({
						data,
					}),
				});
			})
	} catch (err){
		callback(new Error(err));
	}

};
