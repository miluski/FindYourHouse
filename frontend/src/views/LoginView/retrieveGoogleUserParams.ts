export async function retrieveGoogleUserParams(accessToken: String) {
	try {
		const endpoint = `https://www.googleapis.com/oauth2/v1/userinfo`;
		const response = await fetch(endpoint, {
			method: "GET",
			headers: {
				"Authorization": `Bearer ${accessToken}`
			}
		});
		console.log(await response.json());
	} catch(error) {
		console.error(error);
	}
}