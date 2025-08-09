export const checkEmailExists = async (apiKey, email) => {
    const url = 'https://email-verifier-plus.p.rapidapi.com/check?email=' + email;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'email-verifier-plus.p.rapidapi.com'
        }
    };
    const response = await fetch(url, options);
    return response.json();
};
