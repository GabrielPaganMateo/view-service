import ResponseCode from "../enumerators/ResponseCode";

async function registerEmail(setResponse, userEmail) {
    try {
        const response = await fetch('https://localhost:8080/register', {
                method : "POST", 
                headers : { "Content-Type" : "application/json" },
                body: JSON.stringify({email: userEmail})
            })
        response.json().then(data => handleRegistration(setResponse, data));
    } catch (error) {
        console.log(error);
    }
}

function handleRegistration(setResponse, response) {
    const code = new ResponseCode();
    if (response !== undefined) {
        console.log(response.code)
        if (response.code === code.USER_UNVERIFIED 
            || response.code === code.INVALID_EMAIL
            || response.code === code.USER_EXISTS) {
            setResponse(response.message);
        } else if (response.code === code.RESGITER_OK) {
            setResponse(response.code);
        }
    }
}

export {registerEmail, handleRegistration};