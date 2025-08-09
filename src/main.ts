
export type EmailVerifierPlusResponse = {
	email: string;
	reachable: 'yes' | 'no';
	syntax: {
		username: string;
		domain: string;
		valid: boolean;
	};
	smtp: {
		host_exists: boolean;
		full_inbox: boolean;
		catch_all: boolean;
		deliverable: boolean;
		disabled: boolean;
	};
	gravatar: null | string;
	suggestion: string;
	disposable: boolean;
	role_account: boolean;
	free: boolean;
	has_mx_records: boolean;
}

export const checkEmailExists = async (apiKey: string, email: string): Promise<EmailVerifierPlusResponse> => {
	const url = 'https://email-verifier-plus.p.rapidapi.com/check?email='+email;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': apiKey,
			'X-RapidAPI-Host': 'email-verifier-plus.p.rapidapi.com'
		}
	};

	const response = await fetch(url, options);
	return response.json();
}