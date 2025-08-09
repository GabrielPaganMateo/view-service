
async function fetchResponse(request, setResponse, setToken) {
    try {
        const response = await fetch('https://localhost:8080' + request.endpoint, {
            method : 'POST',
            headers : { 
                'Content-Type' : 'application/json'
            },
            
            body : JSON.stringify(request.getRegisterRequestBody())
        })
        // Browser only exposes Authorization header if exposed by backend
        setToken(response.headers.get('Authorization'));
        response.json().then(data => setResponse(data));
    } catch (error) {
        console.log(error);
    }
}

export default fetchResponse;