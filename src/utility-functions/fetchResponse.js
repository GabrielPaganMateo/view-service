
async function fetchResponse(endpoint, body, setResponse) {
    try {
        const response = await fetch('https://localhost:8080' + endpoint, {
            method : 'POST',
            headers : { 
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({ email : body.email })
        })

        const token = response.headers['authorization'];
        console.log(token);
        response.json().then(data => setResponse(data))
    } catch (error) {
        console.log(error);
    }
}

export default fetchResponse;