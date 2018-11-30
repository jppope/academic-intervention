const db = require('./db');

export const hello = async (event, context, callback) => {
	let body = JSON.stringify(event.body);
	console.log(db)
	// db.todo.create({task: body.task})
	// 	.then((todo) => {})
				const response = {
					statusCode: 200,
					body: JSON.stringify({
						todo: db
					}),
				};
				callback(null, response);
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)`);
  }, time * 1000)
);
