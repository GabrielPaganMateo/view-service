import ErrorMessage from '../constants/ErrorMessage';
import ResponseCode from '../constants/ResponseCode';
import ResponseKeys from '../constants/ResponseKeys';
import ApiResponse from '../utility-classes/ApiResponse'

async function fetchResponse(request, setResponse, setToken) {
    try {
        const response = await fetch('https://localhost:8080' + request.endpoint, {
            method : 'POST',
            headers : request.getRequestHeadersByEndpoint(),
            body : JSON.stringify(request.getRequestBodyByEndpoint())
        })

        if (response.status === 500) {
            response.json().then(() => setResponse(
                new ApiResponse(null, "Internal Server Error", null)
            ));
            return;
        }
        // Browser only exposes Authorization header if exposed by backend
        setToken(response.headers.get(ResponseKeys.AUTHORIZATION));
        response.json().then(data => setResponse(
            new ApiResponse(data[ResponseKeys.CODE], data[ResponseKeys.MESSAGE], data[ResponseKeys.DETAILS])
        ));

    } catch (error) {
        console.log(error);
        setResponse(new ApiResponse(ResponseCode.CONN_REFUSED, ErrorMessage.FAILED_CONN, null));
    }
}

export default fetchResponse;