import ApiEndpoint from "../constants/ApiEndpoint";
import InputName from "../constants/InputName";

class ApiRequest {

    email;
    password;
    code;
    token;
    endpoint;

    constructor() {}

    setRegisterRequest(event) {
        this.email = event.target[InputName.EMAIL].value;
        this.endpoint = ApiEndpoint.REGISTER;
    }

    getRegisterRequestBody() {
        return { email : this.email }
    }

    setVerifyRequest(event, token) {
        this.code = event.target[InputName.CODE].value;
        this.token = token;
    }

    getRequestBodyByEndpoint() {
        if (this.endpoint === ApiEndpoint.REGISTER) {
            return this.getRegisterRequestBody();
        }
    }

    getRequestHeadersByEndpoint() {
        if (this.endpoint === ApiEndpoint.REGISTER || this.endpoint === ApiEndpoint.LOGIN) {
            return { 
                'Content-Type' : 'application/json'
            }
        } else {
            return { 
                'Content-Type' : 'application/json',
                'Authorization' : this.token
            }
        }
    }
}

export default ApiRequest;