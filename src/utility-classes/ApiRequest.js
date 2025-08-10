import ApiEndpoint from "../constants/ApiEndpoint";
import InputName from "../constants/InputName";
import clearTargetValue from "../utility-functions/clearTargetValue";

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
        clearTargetValue(event.target[InputName.EMAIL]);
    }

    getRegisterRequestBody() {
        return { email : this.email }
    }

    setVerifyRequest(event, token) {
        this.code = event.target[InputName.CODE].value;
        this.endpoint = ApiEndpoint.VERIFY;
        this.token = token;
        clearTargetValue(event.target[InputName.CODE]);
    }

    getVerifyRequestBody() {
        return { code : this.code }
    }

    setConfirmRequest(event, token) {
        this.password = event.target[InputName.PASSWORD].value;
        this.endpoint = ApiEndpoint.CONFIRM;
        this.token = token;
        clearTargetValue(event.target[InputName.PASSWORD]);
    }

    getConfirmRequestBody() {
        return { password : this.password}
    }

    getRequestBodyByEndpoint() {
        if (this.endpoint === ApiEndpoint.REGISTER) {
            return this.getRegisterRequestBody();
        } else if (this.endpoint === ApiEndpoint.VERIFY) {
            return this.getVerifyRequestBody();
        } else if (this.endpoint === ApiEndpoint.CONFIRM) {
            return this.getConfirmRequestBody();
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