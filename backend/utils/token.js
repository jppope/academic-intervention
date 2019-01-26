/**
 * Cause we send a ton of these
 */
export default function (token) {
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		},
		body: JSON.stringify({
			token,
		}),
	};
}
