import ApiEndpoint from "../enumerators/ApiEndpoint";
import InputName from "../enumerators/InputName";

class ApiRequest {

    email;
    password;
    code;
    token;
    endpoint;
    inputName = new InputName();
    allEndpoints = new ApiEndpoint();

    constructor() {}

    setRegisterRequest(event) {
        this.email = event.target[this.inputName.EMAIL].value;
        this.endpoint = this.allEndpoints.REGISTER;
    }

    getRegisterRequestBody() {
        return { email : this.email }
    }

    setVerifyRequest(event, token) {
        this.code = event.target[this.inputName.CODE].value;
        this.token = token;
    }
}

export default ApiRequest;