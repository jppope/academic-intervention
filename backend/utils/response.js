/**
 * Cause we send a ton of these
 */
export default function(message) {
	return {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		body: JSON.stringify({
			message,
		}),
	};
}
