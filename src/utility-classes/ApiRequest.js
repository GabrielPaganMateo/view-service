import ApiEndpoint from "../constants/ApiEndpoint";
import InputName from "../constants/InputName";

class ApiRequest {

    email;
    password;
    code;
    token;
    endpoint;

    constructor() {}

    setRegisterRequest(values) {
        this.email = values[InputName.EMAIL_REGISTER];
        this.endpoint = ApiEndpoint.REGISTER;
    }

    getRegisterRequestBody() {
        return { email : this.email }
    }

    setVerifyRequest(values, token) {
        console.log(values);
        this.code = values[InputName.CODE];
        console.log(this.code)
        this.endpoint = ApiEndpoint.VERIFY;
        this.token = token;
    }

    getVerifyRequestBody() {
        return { code : this.code }
    }

    setConfirmRequest(values, token) {
        this.password = values[InputName.PASSWORD_CONFIRM1];
        this.endpoint = ApiEndpoint.CONFIRM;
        this.token = token;
    }

    getConfirmRequestBody() {
        return { password : this.password}
    }

    setLoginRequest(values) {
        this.email = values[InputName.EMAIL_LOGIN];
        this.password = values[InputName.PASSWORD_LOGIN];
        this.endpoint = ApiEndpoint.LOGIN;
    }

    getLoginRequestBody() {
        return { email : this.email, password : this.password }
    }

    getRequestBodyByEndpoint() {
        if (this.endpoint === ApiEndpoint.REGISTER) {
            return this.getRegisterRequestBody();
        } else if (this.endpoint === ApiEndpoint.VERIFY) {
            return this.getVerifyRequestBody();
        } else if (this.endpoint === ApiEndpoint.CONFIRM) {
            return this.getConfirmRequestBody();
        } else if (this.endpoint === ApiEndpoint.LOGIN) {
            return this.getLoginRequestBody();
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