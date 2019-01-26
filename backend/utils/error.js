/**
 * Cause we send a ton of these
 */
export default function (message) {
	return {
		statusCode: 401,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify({
			message,
		}),
	};
}
